import * as types from '@store/types';

const setDesiredArticleLength = (length) => ({
  type: types.SET_DESIRED_ARTICLE_LENGTH,
  length
});

export { setDesiredArticleLength };