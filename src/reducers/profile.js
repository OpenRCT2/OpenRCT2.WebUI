export const ProfileState = {
  DEFAULT: 'DEFAULT',
  SIGNING_IN: 'SIGNING_IN',
  SIGNED_IN: 'SIGNED_IN'
}

const initialState = {
  state: ProfileState.DEFAULT
};

export const profile = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGN_IN_SUCCESS':
      return {
        state: ProfileState.SIGNED_IN,
        ...action.response
      }
    default:
      return state;
  }
}

export const isSignedIn = (profile) => {
  return profile.state === ProfileState.SIGNED_IN;
}
