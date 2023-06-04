import { useState } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import Movie from "./components/Movie";
import FavMovie from "./components/FavMovie";
import { useDispatch, useSelector, } from "react-redux";
import { backToFirst , deleteMovie , previousMovie, nextMovie } from "./store/actions/movieActions";

function App() {
  
  const favMovies = useSelector((store) => store.FavoriteReducer.favorites);
  const movies = useSelector((store) => store.movieReducers.movies);
  const siraNo = useSelector((store) => store.movieReducers.siraNo);

  const dispatch = useDispatch();

  const addFavListHandler = () => {
    dispatch(deleteMovie(movies[siraNo]));
    dispatch(addFavorite(movies[siraNo]))
  }


  function sonrakiFilm() {
    setSira(sira + 1);
  }

  return (
    <div className="wrapper max-w-2xl mx-auto">
      <nav className="flex text-2xl pb-6 pt-8 gap-2 justify-center">
        <NavLink to="/" exact className="py-3 px-6 " activeClassName="bg-white shadow-sm text-blue-600">
          Filmler
        </NavLink>
        <NavLink to="/listem" className="py-3 px-6 " activeClassName="bg-white shadow-sm text-blue-600">
          Listem
        </NavLink>
      </nav>
      <Switch>
        <Route exact path="/">
          {movies.length != 0 ?
            <>
              <Movie />

              <div className="flex gap-3 justify-end py-3">

                <button
                  onClick={() => dispatch(backToFirst())}
                  className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
                >
                  Başa Dön
                </button>

                {siraNo !== 0 && <button
                  onClick={() => dispatch(previousMovie(1))}
                  className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
                >
                  Önceki
                </button>}

                {siraNo !== (movies.length - 1) && <button
                  onClick={() => dispatch(nextMovie(1))}
                  className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
                >
                  Sıradaki
                </button>}

                <button onClick={addFavListHandler} className="select-none px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white">
                  Listeme ekle
                </button>

              </div>
            </>
            : <h1>Filmler Bitti.....</h1>
          }

        </Route>
        <Route path="/listem">
          <div>
            {favMovies.map((movie) => (
              <FavMovie key={movie.id} title={movie.title} id={movie.id} />
            ))}
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;