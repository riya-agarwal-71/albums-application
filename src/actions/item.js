import { ITEMS_FETCH_FAILED, ITEMS_FETCH_SUCCESSFULL } from "./actionTypes";
import axios from "axios";

export function itemsFetchSuccessfull(data) {
  return {
    type: ITEMS_FETCH_SUCCESSFULL,
    data: data,
  };
}

export function itemsFetchFailed(error) {
  return {
    type: ITEMS_FETCH_FAILED,
    error: error,
  };
}

export function fetchItems() {
  return (dispatch, done) => {
    return axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((items) => {
        dispatch(itemsFetchSuccessfull(items.data));
        done();
      })
      .catch((_) => {
        dispatch(itemsFetchFailed("Error in fetching data"));
        done();
      });
  };
}
