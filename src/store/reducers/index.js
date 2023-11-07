import { combineReducers } from "redux";
import movieReducers from "./movieReducers";
import favoriteReducers from "./favoriteReducers";

const combines = combineReducers({
  movieReducers,
  favoriteReducers,
});

export default combines;