export const NEXT_PLACE = "NEXT_PLACE";
export const PREV_PLACE = "PREV_PLACE";
export const FIRST_PLACE = "FIRST_PLACE";
export const REMOVE_MOVIE = "REMOVE_MOVIE";
export const ADD_MOVIE = "ADD_MOVIE";
export const INITIAL_MOVIES = "INITIAL_MOVIES";
export const ADD_ALL_MOVIES = "ADD_ALL_MOVIES";

export const loadInitialMovies = () => {
  return { type: INITIAL_MOVIES };
};
export const nextPlace = () => {
  return { type: NEXT_PLACE };
};

export const prevPlace = () => {
  return { type: PREV_PLACE };
};

export const firstPlace = () => {
  return { type: FIRST_PLACE };
};

export const removeMovie = (movie) => {
  return { type: REMOVE_MOVIE, payload: movie };
};

export const addMovie = (favMovie) => {
  return { type: ADD_MOVIE, payload: favMovie };
};

export const addAllMovies = () => {
  return { type: ADD_ALL_MOVIES };
};
