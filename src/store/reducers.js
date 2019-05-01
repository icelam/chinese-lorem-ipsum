import * as types from '@store/types';
import initialState from '@store/states';

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_DESIRED_ARTICLE_LENGTH:
      return Object.assign({}, state, {
        desiredArticleLength: action.length
      });
    default:
      return state;
  }
};
