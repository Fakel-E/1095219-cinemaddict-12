const filmToFilterMap = {
  all: (films) => films.length,
  watchlist: (films) => films.filter((film) => film.isWatchlist).length,
  history: (films) => films.filter((film) => film.isWatched).length,
  favorites: (films) => films.filter((film) => film.isFavorite).length,
};
// ! почитать про классы и деструктуризацию в js
export const generateFilter = (films) => {
  return Object.entries(filmToFilterMap).map(([filterName, countFilms]) => ({
    name: filterName,
    count: countFilms(films),
  }));
};

