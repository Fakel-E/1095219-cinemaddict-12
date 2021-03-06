import {createProfileTemplate} from "./view/profile";
import {createSiteMenuTemplate} from "./view/site-menu";
import {createSortMenuTemplate} from "./view/sort-menu";
import {createFilmTemplate} from "./view/film-container";
import {createFilmCard} from "./view/film-card";
import {createButtonShowTemplate} from "./view/button-more";
import {createTopRatedTemplate} from "./view/top-rate";
import {createTopCommentTemplate} from "./view/top-comment";
import {createStatisticTemplate} from "./view/statistic";
import {createPopupTemplate} from "./view/popup";
import {generateFilm} from "./mock/film";
// import {generateComment} from "./mock/comment";
import {generateFilter} from "./mock/filter";

const FILM_COUNT = 20;
const FILM_TOP = 2;
const FILM_PER_STEP = 5;

const films = new Array(FILM_COUNT).fill(``).map(generateFilm);
const filters = generateFilter(films);

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteHeaderElement = document.querySelector(`.header`);
const siteMainElement = document.querySelector(`.main`);
const siteFooterElement = document.querySelector(`.footer`);

const siteStatisticElement = document.querySelector(`.footer__statistics`);

render(siteHeaderElement, createProfileTemplate(), `beforeend`);
render(siteMainElement, createSiteMenuTemplate(filters), `beforeend`);
render(siteMainElement, createSortMenuTemplate(), `beforeend`);
render(siteMainElement, createFilmTemplate(), `beforeend`);

const filmTemplate = document.querySelector(`.films`);
const siteFilmContainer = filmTemplate.querySelector(`.films-list`);
const filmCardContainer = siteFilmContainer.querySelector(`.films-list__container`);

for (let i = 0; i < Math.min(films.length, FILM_PER_STEP); i++) {
  render(filmCardContainer, createFilmCard(films[i]), `beforeend`);
}
if (films.length > FILM_PER_STEP) {
  let renderedTaskCount = FILM_PER_STEP;
  render(siteFilmContainer, createButtonShowTemplate(), `beforeend`);

  const loadMoreButton = siteFilmContainer.querySelector(`.films-list__show-more`);

  loadMoreButton.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    films
      .slice(renderedTaskCount, renderedTaskCount + FILM_PER_STEP)
      .forEach((film) => render(filmCardContainer, createFilmCard(film), `beforeend`));

    renderedTaskCount += FILM_PER_STEP;

    if (renderedTaskCount >= films.length) {
      loadMoreButton.remove();
    }
  });
}

render(filmTemplate, createTopRatedTemplate(), `beforeend`);
render(filmTemplate, createTopCommentTemplate(), `beforeend`);
const arrTopElement = document.querySelectorAll(`.films-list--extra`);

arrTopElement.forEach((topElementsContainer) => {
  for (let k = 0; k < FILM_TOP; k++) {
    render(topElementsContainer.querySelector(`.films-list__container`), createFilmCard(films[k]), `beforeend`);
  }
});

render(siteStatisticElement, createStatisticTemplate(), `beforeend`);

films.forEach((item) => {
  render(siteFooterElement, createPopupTemplate(item), `afterend`);
});
