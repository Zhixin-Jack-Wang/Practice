import React, { useState } from "react";
import Card from "../cards/Card";
import axios from "axios";
import { updatePosts } from "../../actions/postAction";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Index = props => {
  const [value, setValue] = useState({ title: "", body: "" });
  const onChangeHandler = e => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const submitHandler = async event => {
    event.preventDefault();
    const body = { ...value };
    console.log(body);
    props.updatePosts(body);
    /*     try {
      const { data } = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        body
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    } */
  };

  return (
    <>
      <Card />
      <form onSubmit={submitHandler}>
        <label htmlFor="">Title</label>
        <input
          type="text"
          name="title"
          value={value.title}
          onChange={onChangeHandler}
        />
        <label htmlFor="">body</label>
        <input
          type="text"
          name="body"
          value={value.body}
          onChange={onChangeHandler}
        />
        <button type="submit">Post</button>
      </form>
      <div>
        <h1>{props.newPost.title}</h1>
        <p>{props.newPost.body}</p>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  newPost: state.data.newPost
});
Index.propTypes = {
  updatePosts: PropTypes.func,
  newPost: PropTypes.object
};
export default connect(
  mapStateToProps,
  { updatePosts }
)(Index);
