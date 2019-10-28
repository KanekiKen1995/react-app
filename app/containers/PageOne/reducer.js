import { CHANGE_USERNAME } from './constants';

// The initial state of the App
const initialState = {
  username: '',
};

function pageOneReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_USERNAME:
      return { ...state, username: action.name };
    case 'USER_NAME_SUCCEEDED':
      return { ...state, username: action.name };
    default:
      return state;
  }
}

export default pageOneReducer;
