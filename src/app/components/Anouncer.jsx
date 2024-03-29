import React from "react";
import Marquee from "react-fast-marquee";
import "./Anouncer.css";

const Anouncer = ({ data }) => {
  return (
    <div className="main-marq">
      <Marquee>
        <div className="anouncer">
          {data?.map((d) => {
     < div key ="index">
            return <h1>{d.highlighterText}</h1>;
       </div>
          })}
        </div>
      </Marquee>
    </div>
  );
};

export default Anouncer;
