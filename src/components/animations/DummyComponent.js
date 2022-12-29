import React from "react";

import AnimatedComponent from "./AnimatedComponent";

const DummyComponent = () => {
  return (
    <AnimatedComponent>
      <div
        style={{
          display: `flex`,
          //   alignItems: `center`,
          textAlign: `center`,
          justifyContent: `center`,
          flexDirection: `column`,
          height: `350px`,
          width: `350px`,
          backgroundColor: `lightgray`,
        }}
      >
        <h1>It's Dummy Component</h1>
        <p>Look how it's rendered!</p>
      </div>
    </AnimatedComponent>
  );
};

export default DummyComponent;
