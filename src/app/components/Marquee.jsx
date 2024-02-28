import React from "react";
import Marquee from "react-fast-marquee";
import "./Marquees.css";

const Marquees = () => {
  return (
    <Marquee speed={50}>
      <div className="width-container">
        <div>
          <div className="outer-border-m">
            <h1>1500+ </h1>
            <img src="images/tick-mark.png" alt="" />
            <p>Student Placed</p>
          </div>
        </div>
        <div>
          <div className="outer-border-m">
            <h1>4 LPA</h1>
            <img src="images/money.png" alt="" />
            <p>Average Salary</p>
          </div>
        </div>
        <div>
          <div className="outer-border-m">
            <h1>19 LPA</h1>
            <img src="images/medal.png" alt="" />
            <p>Highest salary</p>
          </div>
        </div>
        <div>
          <div className="outer-border-m">
            <h1>1300+</h1>
            <img src="images/partner.png" alt="" />
            <p>Partnered companies</p>
          </div>
        </div>
      </div>
    </Marquee>
  );
};

export default Marquees;
