const usersReducer = (state = [], action) => {
  console.log(state);
  switch (action.type) {
    case "FETCH_USER":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default usersReducer;
