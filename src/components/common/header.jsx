import React,  { useState } from 'react';
import { connect } from 'react-redux';
import { addTeamAct } from '../../actions/teamAction';
import '../../css/header.css';

const Header = (props) => {

  const [ teamName, setTeamName] = useState('');
  const [ teamType, setTeamType] = useState('');
  const { addTeam, teamList } = props;

  const handleSelect = ev => {
    setTeamType(ev.target.value);
  };

  const handleName = ev => {
    setTeamName(ev.target.value);
  };

  const handleCreate = ev => {
    ev.preventDefault();
    if (!teamName || !teamType) {
      return ;
    }
    const data = {
      teamType,
      teamName,
      id: teamList.length + 1
    }
    addTeam(data);
    setTeamName('');
    setTeamType('');
  };

  return (
    <header>
      <div className="searchBar">
        <form>
          <div className="form-group">
            <label htmlFor="name">Select Type</label>
            <select value={teamType} onChange={handleSelect}>
              <option value="">Choose Any</option>
              <option value="team">Team</option>
            </select>
          </div>
          <div className="form-group">
            <label>Team Name</label>
            <input type="text" id="name" placeholder="Enter here" onChange={handleName} value={teamName} />
          </div>
          <button className="button create-btn" onClick={handleCreate}>CREATE</button>
        </form>
      </div>
    </header>
  )
}


export default connect(
  ({ team }) => ({
    teamList: team.teamList,
  }),
  dispatch => ({
    addTeam: data => dispatch(addTeamAct(data)),
  })
)(Header);