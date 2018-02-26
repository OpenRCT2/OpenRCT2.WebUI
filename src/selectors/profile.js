import { ProfileState } from '../constants/profile'

export const isSignedIn = profile => profile.state === ProfileState.SIGNED_IN;
