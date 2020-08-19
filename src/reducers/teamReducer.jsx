const initialState = {
  teamList: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TEAM':
      return {
        ...state,
        teamList: [...state.teamList, {...action.payload} ]
      };

    default:
      return state;
  }
};