import React, { Component } from "react";

//1
const imageContext = React.createContext();

//2
export class Provider extends Component {
  state = {
    imgArr: [
      "https://i.imgur.com/6wWFbIO.jpg",
      "https://i.imgur.com/boPI6sb.jpg",
      "https://i.imgur.com/8Nyy0lJ.jpg"
    ]
  };

  render() {
    return (
      <imageContext.Provider value={this.state}>
        {this.props.children}
      </imageContext.Provider>
    );
  }
}

//3
export const Consumer = imageContext.Consumer;
