import React from "react";
import Marquee from "react-fast-marquee";
import "./Anouncer.css";

const Anouncer = ({ data }) => {
  return (
    <div className="main-marq">
      <Marquee>
        <div className="anouncer">
          {data?.map((d) => {
            return <h1>{d.highlighterText}</h1>;
          })}
        </div>
      </Marquee>
    </div>
  );
};

export default Anouncer;
