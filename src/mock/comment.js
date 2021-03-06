// import {getRandomInteger} from "../util";
// import {mixArray} from "../util";
import {generateRandom} from "../util";
import {generateDate} from "../util";

const COMMENT_EMOJI = [
  `images/emoji/smile.png`,
  `images/emoji/angry.png`,
  `images/emoji/puke.png`,
];

const COMMENT_TEXT = [
  `new text comment`,
  `bad film`,
  `good film`,
];

const COMMENT_AUTHOR = [
  `Carl`,
  `Norman`,
  `Flin`,
];

export const generateComment = () => {

  return {
    emoji: generateRandom(COMMENT_EMOJI),
    text: generateRandom(COMMENT_TEXT),
    author: generateRandom(COMMENT_AUTHOR),
    date: generateDate()
  };
};
