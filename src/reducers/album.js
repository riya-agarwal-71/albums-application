import {
  ALBUM_FETCH_FAILED,
  ALBUM_FETCH_SUCCESSFULL,
} from "../actions/actionTypes";

const initialAlbumState = {
  data: null,
  error: null,
  success: null,
};

export default function album(state = initialAlbumState, action) {
  switch (action.type) {
    case ALBUM_FETCH_FAILED:
      return {
        ...state,
        error: action.error,
        success: false,
        data: null,
      };
    case ALBUM_FETCH_SUCCESSFULL:
      return {
        ...state,
        error: null,
        success: true,
        data: action.albums,
      };
    default:
      return state;
  }
}
