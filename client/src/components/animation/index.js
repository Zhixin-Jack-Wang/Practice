import React, { useState } from "react";
import { Spring } from "react-spring/renderprops";
const c1Style = {
  background: "steelblue",
  color: "white",
  padding: "1.5rem"
};
const c2Style = {
  background: "slateblue",
  color: "white",
  padding: "1.5rem"
};

const counter = {
  background: "#333",
  textAlign: "center",
  width: "100px",
  borderRadius: "50%",
  margin: "1rem auto"
};

const Comp1 = () => {
  return (
    // fades in, appear from top
    <Spring
      from={{ opacity: 0, marginTop: -500 }}
      to={{ opacity: 1, marginTop: 0 }}
    >
      {props => (
        <div style={props}>
          <div style={c1Style}>
            <h1>component1</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis, dolorem.
            </p>
            <Spring
              config={{ duration: 10000 }}
              from={{ number: 0 }}
              to={{ number: 10 }}
            >
              {props => (
                <div style={props}>
                  <h1 style={counter}>{props.number.toFixed()}</h1>
                </div>
              )}
            </Spring>
          </div>
        </div>
      )}
    </Spring>
  );
};

const Comp2 = () => {
  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      //   wait 1sec and take 1sec to fade in
      config={{ delay: 1000, duration: 1000 }}
    >
      {props => (
        <div style={props}>
          <div style={c2Style}>
            <h1>component2</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis, dolorem.
            </p>
          </div>
        </div>
      )}
    </Spring>
  );
};
const index = () => {
  const [value, setValue] = useState({ showComponent3: false });
  return (
    <>
      <Comp1 />
      <Comp2 />
    </>
  );
};

export default index;
