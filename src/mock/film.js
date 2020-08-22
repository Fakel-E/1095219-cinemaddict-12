// import
const FILM_NAME = [
  `Начало`,
  `Назад в Будущее`,
  `Темный рыцарь`,
  `Мстители`,
  `Легенда № 17`,
];
const FILM_POSTER = [
  `images/posters/made-for-each-other.png`,
  `images/posters/popeye-meets-sinbad.png`,
  `images/posters/sagebrush-trail.jpg`,
  `images/posters/santa-claus-conquers-the-martians.jpg`,
];

const FILM_DESCRIPTIONS = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat.`,
  `Nunc fermentum tortor ac porta dapibus.`,
  `In rutrum ac purus sit amet tempus`,
];

const FILM_RATE = [
  `10`,
  `9`,
  `8`,
  `7`,
  `6`,
  `5`,
];

const FILM_YEAR = [
  `2020`,
  `2019`,
  `2018`,
  `2017`,
  `2016`,
];

const FILM_RUNTIME = [
  `3h 00m`,
  `2h 00m`,
  `1h 00m`,
];

const FILM_GENRES = [
  `Drama`,
  `Film-Noir`,
  `Mystery`,
  `Fantastic`,
];

const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const mixArray = function (massive) {
  for (let i = massive.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = massive[i];
    massive[i] = massive[j];
    massive[j] = temp;
  }
  massive.splice(0, getRandomInteger(0, massive.length - 1));
  return massive;
};

const generateRandom = (elements) => {
  const randomIndex = getRandomInteger(0, elements.length - 1);
  return elements[randomIndex];
};

const generateDescription = () => {
  const randomDescription = mixArray(FILM_DESCRIPTIONS);
  return randomDescription;
};

export const generateComment = () => {
  return {
    emoji: `./images/emoji/smile.png`,
    text: `какой-то текст комментария`,
    author: `Пал-палыч`,
    date: `Дата комментария`
  };
};

export const generateFilm = () => {
  return {
    name: generateRandom(FILM_NAME),
    poster: generateRandom(FILM_POSTER),
    description: generateDescription(),
    rate: generateRandom(FILM_RATE),
    year: generateRandom(FILM_YEAR),
    runtime: generateRandom(FILM_RUNTIME),
    genre: generateRandom(FILM_GENRES),
  };
};


