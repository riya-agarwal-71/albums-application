import {
  ITEMS_FETCH_FAILED,
  ITEMS_FETCH_SUCCESSFULL,
} from "../actions/actionTypes";

const initialItemState = {
  data: null,
  error: null,
  success: null,
};

export default function item(state = initialItemState, action) {
  switch (action.type) {
    case ITEMS_FETCH_FAILED:
      return {
        ...state,
        error: action.error,
        success: false,
        data: null,
      };
    case ITEMS_FETCH_SUCCESSFULL:
      return {
        ...state,
        error: null,
        success: true,
        data: action.data,
      };
    default:
      return state;
  }
}
