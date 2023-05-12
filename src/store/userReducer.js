const initialState = {
    isLoggedIn:true,
  }
  function userReducer(state = initialState, action) {
    switch (action.type) {
      case 'SHOW_LINK':
        return { ...state, isLoggedIn: false };
      case 'HIDE_LINK':
        return { ...state, isLoggedIn: true };
      default:
        return state;
    }
  }


  export default userReducer;