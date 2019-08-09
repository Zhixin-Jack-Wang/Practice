import React from "react";

const initialState = {
  deathToll: 0,
  survivorCount: 100
};
const newReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DEATH":
      return {
        deathToll: ++state.deathToll,
        survivorCount: --state.survivorCount
      };
    default:
      return state;
  }
};

export default newReducer;
