export function signUpRequest(areaCodeOrigin, areaCodeDestiny, callDuration) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: {areaCodeOrigin, areaCodeDestiny, callDuration},
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}
