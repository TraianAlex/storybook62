const initialState = {
  fullName: 'Traian Alexandru',
  loggedIn: false,
};

export const userReducer = (state = initialState, action) => {
  return state;
};

export const getName = (state) => {
  return state.user.fullName.split(' ')[0];
};
