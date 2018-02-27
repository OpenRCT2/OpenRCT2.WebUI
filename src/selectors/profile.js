import { ProfileState } from '../constants/profile'

export const getName = state => state.profile.name;
export const getToken = state => state.profile.token;
export const isSignedIn = state => state.profile.state === ProfileState.SIGNED_IN;
