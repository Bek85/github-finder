const alertReducer = (state, action) => {
  switch (action.payload) {
    case 'SET_ALERT':
      return action.payload;

    case 'REMOVE_ALERT':
      return null;
    default:
      return state;
  }
};

export default alertReducer;
