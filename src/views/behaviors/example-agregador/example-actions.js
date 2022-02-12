export function signUpRequest(areaCodeOrigin, areaCodeDestiny, callDuration) {
  return {
    type: '@example/EXAMPLE_REQUEST',
    payload: {areaCodeOrigin, areaCodeDestiny, callDuration},
  };
}
}
