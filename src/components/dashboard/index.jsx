import React, { useState } from 'react';
import { connect } from 'react-redux';
import Header from '../common/header';
import UserForm from './userForm';
import TeamList from './TeamList';
import { addUserAct , deleteUserAct } from '../../actions/userAction';
import '../../css/common.css';
import '../../css/dashboard.css';

const Dashboard = (props) => {

  const [userName, setUserName] = useState('');
  const [userDesc, setUserDesc] = useState('');
  const [selectedTeam, setSelectedTeam] = useState(1);
  const { addUser, deleteUser, teamList, userList } = props;

  const handelAddUser = ev => {
    ev.preventDefault();
    if (!userName || !userDesc) {
      return ;
    }
    const data = {
      userName,
      userDesc,
      teamId: selectedTeam,
      id: userList.length + 1
    }
    addUser(data);
    setUserName('');
    setUserDesc('');
  };

  const handelName = ev => {
    setUserName(ev.target.value);
  };

  const handelDesc = ev => {
    setUserDesc(ev.target.value)
  };

  const handleDelete = (ev, id) => {
    ev.preventDefault();
    deleteUser(id);
  }

  const handleTeamSelection = id => {
    setUserName('');
    setUserDesc('');
    setSelectedTeam(id);
  };

  const users = userList.filter((item) => item.teamId === selectedTeam);

  return (
    <React.Fragment>
      <Header />
      <section>
        <TeamList
          teamList={teamList}
          selectedTeam={selectedTeam}
          handleTeamSelection={handleTeamSelection}
        />
        <article>
          <h1>Team { teamList.length > 0 ? selectedTeam : ''}</h1>
          <ul>
            <li>
              <UserForm
                readOnly={false}
                placeholder="Enter here"
                userName={userName}
                handelName={handelName}
                userDesc={userDesc}
                handelDesc={handelDesc}
                handelClick={(ev) => handelAddUser(ev)}
                buttonLabel='Create User +'
                buttonCustomStyle={false}
              />
            </li>
            {users.map((item,index) => {
              return (
                <li key={item.id}>
                  <UserForm
                    readOnly
                    placeholder={`User ${item.id}`}
                    userName={item.userName}
                    userDesc={item.userDesc}
                    handelClick={(ev) => handleDelete(ev,item.id)}
                    buttonLabel='Delete User -'
                    buttonCustomStyle
                  />
                </li>
              )
            })}
          </ul>
        </article>
      </section>
    </React.Fragment>
  )
}

export default connect(
  ({ user, team }) => ({
    userList: user.userList,
    teamList: team.teamList,
  }),
  dispatch => ({
    addUser: data => dispatch(addUserAct(data)),
    deleteUser: data => dispatch(deleteUserAct(data))
  })
)(Dashboard);