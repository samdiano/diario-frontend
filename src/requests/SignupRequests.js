import axios from 'axios';
import { asyncActions } from '../util/AsyncUtil';
import setAuthToken from '../util/AuthTokenUtil';
import { SIGNUP } from '../actionTypes/UserConstants';
import { loginConstant } from '../constants/Constants';
import { msgInfoActions } from '../actions/MsgInfoActions';
import { formatError } from '../helpers/Errors';

export const signup = payload => (dispatch) => {
  dispatch(asyncActions(SIGNUP).loading(true));
  return axios.post(loginConstant.SIGNUP_URL, payload)
    .then((response) => {
      if (response.status === 201) {
        // saving token into the local storage
        localStorage.setItem('token', response.data.token);
        // setting token to request headers for authentication
        setAuthToken(response.data.token);
        dispatch(asyncActions(SIGNUP).success(response.data));
        dispatch(asyncActions(SIGNUP).loading(false));
        dispatch(msgInfoActions.success([response.data]));
      }
      return response;
    })
    .catch((error) => {
      dispatch(asyncActions(SIGNUP).loading(false));
      dispatch(msgInfoActions.failure(formatError(error.response.data)));
      throw error;
    });
};
