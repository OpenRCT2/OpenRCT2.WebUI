import { ProfileState } from '../constants/profile'

const defaultState = {
  state: ProfileState.DEFAULT,
  token: null,
  name: null,
};

const initialState = (() => {
  let profile = localStorage['profile'];
  if (profile) {
    try {
      return JSON.parse(profile);
    } catch (e) { }
  }
  return defaultState;
})();

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGN_IN_SUCCESS':
      let newState = {
        state: ProfileState.SIGNED_IN,
        token: action.token,
        name: action.user.name,
      };
      localStorage['profile'] = JSON.stringify(newState);
      return newState;
    case 'SIGN_OUT_SUCCESS':
      localStorage.removeItem('profile');
      return defaultState;
    default:
      return state;
  }
}

export default reducer;
