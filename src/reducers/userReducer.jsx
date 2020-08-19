const initialState = {
  userList: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return {
        ...state,
        userList: [...state.userList, {...action.payload} ]
      };

    case 'DELETE_USER':
      return {
        ...state,
        userList: state.userList.filter(user => user.id !== action.payload),
      };

    default:
      return state;
  }
};