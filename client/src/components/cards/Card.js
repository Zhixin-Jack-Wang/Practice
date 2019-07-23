import React, { Component } from "react";
import { fetchPosts } from "../../actions/postAction";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Card extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const posts = this.props.posts;
    console.log(posts);
    return (
      <div className="card" style={{ width: 18 + "rem" }}>
        <div className="card-body">
          <h5 className="card-title">{posts[0] ? posts[0].title : ""}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.data.posts
});

Card.propTypes = {
  fetchPosts: PropTypes.func,
  posts: PropTypes.array
};

export default connect(
  mapStateToProps,
  { fetchPosts }
)(Card);
