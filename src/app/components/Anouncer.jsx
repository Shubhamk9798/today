import React from "react";
import Marquee from "react-fast-marquee";
import "./Anouncer.css";

const Anouncer = ({ highlighterText }) => {
  return (
    <div className="main-marq">
      <Marquee>
        <div className="anouncer">
          <h1>{highlighterText}</h1>;
        </div>
      </Marquee>
    </div>
  );
};

export default Anouncer;
