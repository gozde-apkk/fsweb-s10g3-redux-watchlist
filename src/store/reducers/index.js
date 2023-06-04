import { combineReducers } from "redux";
import movieReducers from "./movieReducers";
import favoriteReducers from "./favoriteReducers";

const rootReducer = combineReducers({
  movieReducers,
  favoriteReducers,
});

export default rootReducer;