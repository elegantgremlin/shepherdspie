const initialState = {
  isAuthenticated: false,
  userinfo: { id: 0, username: '' },
  userProfile: {},
};

export default function eventReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
