const githubReducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
      };
    case "CLEAR_USERS":
      return {
        ...state,
        users: [],
      };

    //if theres no action, return the current state
    default:
      return state;
  }
};

export default githubReducer;
