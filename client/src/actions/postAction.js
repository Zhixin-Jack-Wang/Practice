// all the actions regarding post
import { FETCH_POST, UPDATE_POST } from "./types";
import axios from "axios";

// export const fetchPosts = () => dispatch => {
//   console.log("action fired");
//   axios
//     .get(`https://jsonplaceholder.typicode.com/posts`)
//     .then(({ data: post }) => {
//       dispatch({
//         type: FETCH_POST,
//         payload: [post[0], post[1]]
//       });
//     });
// };
export const fetchPosts = () => {
  return async dispatch => {
    // console.log("action fired");
    try {
      const { data: post } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts`
      );

      // console.log("received: " + post);

      dispatch({ type: FETCH_POST, payload: [post[0], post[1]] });
    } catch (e) {
      console.log("error" + e);
    }
  };
};

// post action
export const updatePosts = body => async dispatch => {
  try {
    const { data } = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      body
    );
    dispatch({ type: UPDATE_POST, payload: { ...data } });
  } catch (error) {
    console.log(error);
  }
};
