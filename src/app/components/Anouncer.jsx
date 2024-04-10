import React from "react";
import Marquee from "react-fast-marquee";
import "./Anouncer.css";

const Anouncer = ({ data }) => {
  return (
    <div className="main-marq">
      <Marquee>
        <div className="anouncer">
          <h1>{data?.highlighterText}</h1>;
        </div>
      </Marquee>
    </div>
  );
};

export default Anouncer;
