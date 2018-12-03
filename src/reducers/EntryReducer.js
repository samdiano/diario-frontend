import { GET_ALL_ENTRIES, GET_ENTRY } from '../actionTypes/EntriesConstants';
import { asyncActionName } from '../util/AsyncUtil';


const initialState = {
  entries: [],
  entry: [],
  loading: false
};

const entryReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case asyncActionName(GET_ALL_ENTRIES).loading:
      return { ...state, loading: action.payload };
    case asyncActionName(GET_ALL_ENTRIES).success:
      return { ...state, entry: action.payload.entries };
    case asyncActionName(GET_ENTRY).loading:
      return { ...state, entries: action.payload };
    case asyncActionName(GET_ENTRY).success:
      return { ...state, entry: action.payload.entry };
    default:
      return state;
  }
};

export default entryReducer;
