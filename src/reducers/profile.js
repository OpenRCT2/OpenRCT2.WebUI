export const ProfileState = {
  DEFAULT: 'DEFAULT',
  SIGNING_IN: 'SIGNING_IN',
  SIGNED_IN: 'SIGNED_IN'
}

const defaultState = {
  state: ProfileState.DEFAULT
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

export const profile = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGN_IN_SUCCESS':
      let newState = {
        state: ProfileState.SIGNED_IN,
        ...action.response
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

export const isSignedIn = (profile) => {
  return profile.state === ProfileState.SIGNED_IN;
}
