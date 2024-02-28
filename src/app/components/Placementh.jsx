import React from "react";
import "./Placementh.css";
import Marquee from "./Marquee";

export const Placementh = () => {
  return (
    <div className="main-ppl">
      <div className="top">
        <h3
          className="woorries
            "
        >
          Placement Worrries ?
        </h3>
        <h1 className="m-header-p">
          Our Dedicated Placement Team is Commited To Get You The{" "}
          <span className="orange"> Best Job</span>
        </h1>
      </div>
      <div className="main-flex">
        <div className="left">
          <div className="bottom">
            <div className="flex-">
              <div className="seperator-1">
                <div className="element">
                  <div className="icon-1">
                    <img className="icons-p" src="images/1.svg" alt="" />
                  </div>
                  <div className="text-p">
                    <p>Exclusive access to our partner companies</p>
                  </div>
                </div>
                <div className="element">
                  <div className="icon-2">
                    <img className="icons-p" src="images/2.svg" alt="" />
                  </div>
                  <div className="text-p">
                    <p>1v1 experts sessions with industry Experts </p>
                  </div>
                </div>
              </div>
              <div className="seperator2">
                <div className="element">
                  <div className="icon-2">
                    <img className="icons-p" src="images/3.svg" alt="" />
                  </div>
                  <div className="text-p">
                    <p>Resume, Linkedin, Portfolio building</p>
                  </div>
                </div>
                <div className="element">
                  <div className="icon-2">
                    <img className="icons-p" src="images/4.svg" alt="" />
                  </div>
                  <div className="text-p">
                    <p>Soft Skills, HR Interview & Aptitude Training</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="right">
          <Marquee />
        </div>
      </div>
    </div>
  );
};
