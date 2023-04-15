import axios from "axios"
export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const FILTER = "FILTER";
export const ORDER = "ORDER";
export const RESET = "RESET";

export function addFav(character) { // *** to route addFav
  return function (dispatch) {
    axios
      .post(`http://localhost:3001/rickandmorty/favorite`, character)
      .then(({ data }) => {
        return dispatch({
          type: ADD_FAV,
          payload: data, // data is array myFavorites
        });
      })
      .catch((error) => error);
  };
}

export function removeFav(id) { // *** to route deleteFav
  return function (dispatch) {
    axios
      .delete(`http://localhost:3001/rickandmorty/favorite/${id}`)
      .then(({ data }) => {
        return dispatch({
          type: REMOVE_FAV,
          payload: data, // data is array myFavorites
        });
      })
      .catch((error) => error);
  };
}
export function filterCards(gender) {
  return {
    type: FILTER,
    payload: gender,
  };
}
export function orderCards(orden) {
  return {
    type: ORDER,
    payload: orden,
  };
}
export function reset() {
  return {
    type: RESET,
    payload: "",
  };
}
