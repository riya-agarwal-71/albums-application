import { ALBUM_FETCH_FAILED, ALBUM_FETCH_SUCCESSFULL } from "./actionTypes";
import axios from "axios";

export function albumFetchFailed(msg) {
  return {
    type: ALBUM_FETCH_FAILED,
    error: msg,
  };
}

export function albumFetchSuccess(data) {
  return {
    type: ALBUM_FETCH_SUCCESSFULL,
    albums: data,
  };
}

export function fetchAlbums() {
  return (dispatch, done) => {
    return axios
      .get("https://jsonplaceholder.typicode.com/albums")
      .then((albums) => {
        dispatch(albumFetchSuccess(albums.data.slice(0, 5)));
        done();
      })
      .catch((_) => {
        dispatch(albumFetchFailed("Error in fetching data"));
        done();
      });
  };
}
