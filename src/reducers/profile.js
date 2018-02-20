export const profile = (state = null, action) => {
  switch (action.type) {
    case 'PROFILE_SIGNIN':
      return {id: 1, user: action.username};
    default:
      return state;
  }
}

export const isSignedIn = (profile) => {
  return profile !== null;
}
