import React, { useState } from "react";
import { Spring, Transition, animated } from "react-spring/renderprops";
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
const c3Style = {
  background: "skyblue",
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

const btn = {
  background: "#333",
  color: "#fff",
  padding: "1rem.2rem",
  border: "none",
  textTransform: "uppercase",
  margin: "15px, 0"
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

const Comp2 = ({ toggle }) => {
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
            <button style={btn} onClick={toggle}>
              Toggle Component 3
            </button>
          </div>
        </div>
      )}
    </Spring>
  );
};

const Comp3 = () => {
  return (
    <div style={c3Style}>
      <h1>component3</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
        dolorem.
      </p>
    </div>
  );
};

const AniSpring = () => {
  const [value, setValue] = useState({ showComponent3: false });
  const toggle = e => {
    setValue({ showComponent3: !value.showComponent3 });
  };
  return (
    <>
      <Comp1 />
      <Comp2 toggle={toggle} />
      <Transition
        from={{ opacity: 0 }}
        enter={{ opacity: 1 }}
        leave={{ opacity: 0 }}
        native
        items={value.showComponent3}
      >
        {show =>
          show &&
          (props => (
            <animated.div style={props}>
              <Comp3 />
            </animated.div>
          ))
        }
      </Transition>
    </>
  );
};

export default AniSpring;
