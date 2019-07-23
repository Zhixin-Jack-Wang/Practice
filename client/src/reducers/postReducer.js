import { FETCH_POST } from "../actions/types";

const initialState = {
  posts: []
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POST:
      return { ...state, posts: action.payload };
    default:
      return state;
  }
};

export default postReducer;
