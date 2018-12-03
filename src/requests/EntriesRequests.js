import axios from 'axios';
import { asyncActions } from '../util/AsyncUtil';
import { GET_ALL_ENTRIES, GET_ENTRY } from '../actionTypes/EntriesConstants';
import { entriesConstant } from '../constants/Constants';
import { msgInfoActions } from '../actions/MsgInfoActions';
import { formatError } from '../helpers/Errors';

export const fetchEntries = payload => (dispatch) => {
  dispatch(asyncActions(GET_ALL_ENTRIES).loading(true));
  return axios.get(entriesConstant.ENTRIES_URL)
    .then((response) => {
      if (response.status === 200) {
        dispatch(asyncActions(GET_ALL_ENTRIES).success(response.data));
        dispatch(asyncActions(GET_ALL_ENTRIES).loading(false));
        dispatch(msgInfoActions.success([response.data]));
      }
      return response;
    })
    .catch((error) => {
      dispatch(asyncActions(GET_ALL_ENTRIES).loading(false));
      dispatch(msgInfoActions.failure(formatError(error.response.data)));
      throw error;
    });
};

export const fetchEntry = payload => (dispatch) => {
  dispatch(asyncActions(GET_ENTRY).loading(true));
  return axios.get(`${entriesConstant.ENTRIES_URL}/${payload}`)
    .then((response) => {
      if (response.status === 200) {
        dispatch(asyncActions(GET_ENTRY).success(response.data));
        dispatch(asyncActions(GET_ENTRY).loading(false));
        dispatch(msgInfoActions.success([response.data]));
      }
      return response;
    })
    .catch((error) => {
      dispatch(asyncActions(GET_ENTRY).loading(false));
      dispatch(msgInfoActions.failure(formatError(error.response.data)));
      throw error;
    });
};
