import React from "react";
import "./Home.css";
import vectohome from "../assets/Vector.png";
import CountUp from "react-countup";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import social from "../assets/social.png";

const Home = () => {
  return (
    <>
      <section>
        <div className="hero-wrapper">
          <div className="left-div">
            <h1 className="hero-Heading" id="home">
              IT <span className="h-span">Training</span> And <br />
              <span className="h-span">Placement</span> Institute
            </h1>
            <p className="text-secondary">
              SSquareIT is the first training institute which provide training
              and premium placement support to all the IT Courses. Institute
              established in the year 2019 and till date more than 200+ students
              started there career in IT Industry, with our excellent training
              programe and great placement support
            </p>
          </div>
          <div className="right-div">
            <Image src={vectohome} alt="vectoimg" />
          </div>
        </div>
        {/*-----countup section --*/}
        <div className="wrapper-countup">
          <div className="column">
            <span className="countup">
              <div className="numbers">
                <CountUp start={1} end={1300} duration={4} />
                <span>+</span>
              </div>
            </span>

            <span className="sub-countup">IT Companies Refferal</span>
          </div>
          <div className="column">
            <span className="countup">
              <div className="numbers">
                <CountUp start={1} end={4000} duration={2} />
                <span>+</span>
              </div>
            </span>

            <span className="sub-countup">Interview Scheduled</span>
          </div>
          <div className="column">
            <span className="countup">
              <div className="numbers">
                <CountUp start={1} end={100} duration={2} />
                <span>%</span>
              </div>
            </span>

            <span className="sub-countup">Interview Scheduled</span>
          </div>
          <div className="column">
            <span className="countup">
              <div className="numbers">
                <span> &#9733;&#9733;&#9733;&#9733;&#9733;</span>
              </div>
            </span>

            <span className="sub-countup last">5 Star Rating & training</span>
          </div>
        </div>
        <div className="whatts-app">
          <a href="https://wa.me/+919011384921" target="_blank">
            <Image
              className="whatts-app-icon"
              src={social}
              alt="whatts-app-icon"
            />
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;
