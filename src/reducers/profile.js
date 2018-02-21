export const ProfileState = {
  DEFAULT: 'DEFAULT',
  SIGNING_IN: 'SIGNING_IN',
  SIGNED_IN: 'SIGNED_IN'
}

const initialState = (() => {
  let profile = localStorage['profile'];
  if (profile) {
    try {
      return JSON.parse(profile);
    } catch (e) { }
  }
  return {
    state: ProfileState.DEFAULT
  };
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
    default:
      return state;
  }
}

export const isSignedIn = (profile) => {
  return profile.state === ProfileState.SIGNED_IN;
}
