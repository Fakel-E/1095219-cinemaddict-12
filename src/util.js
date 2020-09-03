export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const mixArray = function (massive) {
  massive = massive.slice();

  for (let i = massive.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = massive[i];
    massive[i] = massive[j];
    massive[j] = temp;
  }
  massive.splice(0, getRandomInteger(0, massive.length - 1));
  return massive;
};

export const generateRandom = (elements) => elements[getRandomInteger(0, elements.length - 1)];

export const generateDate = () => {
  const maxDaysGap = 7;
  const daysGap = getRandomInteger(-maxDaysGap, maxDaysGap);
  const currentDate = new Date();

  currentDate.setHours(23, 59, 59, 999);

  currentDate.setDate(currentDate.getDate() + daysGap);

  return new Date(currentDate);
};

export const humanizeDate = (dueDate) => dueDate.toLocaleString(`en-GB`, {day: `numeric`, month: `long`, year: `numeric`});
export const humanizeDateComment = (dueDate) => dueDate.toLocaleString(`en-US`, {year: `numeric`, month: `2-digit`, day: `2-digit`, hour: `2-digit`, minute: `2-digit`});
