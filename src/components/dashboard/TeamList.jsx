import React from 'react';

const TeamList = (props) => {
  
  const { teamList, selectedTeam, handleTeamSelection } = props;
  
  return (
    <aside>
      <p>Teams</p>
      <ul>
        {teamList.map((item) => {
          return (
            <li
              key={item.id}
              className={item.id === selectedTeam ? 'active' : ''}
              onClick={() => handleTeamSelection(item.id)}
            >
              {item.teamName}
            </li>
          )
        })}
      </ul>
    </aside>
  )
}

export default TeamList;