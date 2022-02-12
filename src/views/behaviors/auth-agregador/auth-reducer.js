import produce from 'immer';

const INITIAL_STATE = {
  areaCodeOrigin: 0,
  areaCodeDestiny: 0,
  callDuration: 0,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_UP_REQUEST': {
        draft.areaCodeOrigin = action.payload.areaCodeOrigin;
        draft.areaCodeDestiny = action.payload.areaCodeDestiny;
        draft.callDuration = action.payload.callDuration;
        break;
      }
      default:
    }
  });
}
