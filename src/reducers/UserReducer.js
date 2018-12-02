import { LOGIN, SIGNUP, LOGOUT } from '../actionTypes/UserConstants';
import { asyncActionName } from '../util/AsyncUtil';


const initialState = {
  isAuth: false,
  loading: false
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case asyncActionName(LOGIN).loading:
      return { ...state, loading: action.payload };
    case asyncActionName(LOGIN).success:
      return { ...state, user: action.payload.user, isAuth: true };
    case asyncActionName(LOGOUT).success:
      return initialState;
    case asyncActionName(SIGNUP).loading:
      return { ...state, loading: action.payload };
    case asyncActionName(SIGNUP).success:
      return { ...state, user: action.payload.user, isAuth: true };
    default:
      return state;
  }
};

export default userReducer;
