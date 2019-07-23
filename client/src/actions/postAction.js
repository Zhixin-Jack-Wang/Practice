// all the actions regarding post
import { FETCH_POST } from "./types";
import axios from "axios";

export const fetchPosts = () => dispatch => {
  console.log("action fired");
  axios
    .get(`https://jsonplaceholder.typicode.com/posts`)
    .then(({ data: post }) => {
      dispatch({
        type: FETCH_POST,
        payload: [post[0], post[1]]
      });
    });
};
