import React from "react";

const BGBall = ({ nth }) => {
  return (
    <div id={`bg-ball-${nth}`}>
      <div className="bg-ball-button"></div>
    </div>
  );
};

export default BGBall;
