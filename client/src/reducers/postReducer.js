import { FETCH_POST, UPDATE_POST } from "../actions/types";

const initialState = {
  posts: [],
  newPost: {}
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POST:
      return { ...state, posts: action.payload };

    case UPDATE_POST:
      return { ...state, newPost: action.payload };
    default:
      return state;
  }
};

export default postReducer;
