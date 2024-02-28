import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import "./Companies.css";
import g1 from "./assets/images/g1.webp";
import g2 from "./assets/images/g2.webp";
import g3 from "./assets/images/g3.webp";
import g4 from "./assets/images/g4.webp";
import g5 from "./assets/images/g5.webp";
import g6 from "./assets/images/g6.webp";
import g7 from "./assets/images/g7.webp";
import g8 from "./assets/images/g8.webp";
import g9 from "./assets/images/g9.webp";
import g10 from "./assets/images/g10.webp";
import g11 from "./assets/images/g11.webp";
import g12 from "./assets/images/g12.webp";
import h1 from "./assets/images/h1.webp";
import h2 from "./assets/images/h2.webp";
import h3 from "./assets/images/h3.webp";
import h4 from "./assets/images/h4.webp";
import h5 from "./assets/images/h5.webp";
import h6 from "./assets/images/h6.webp";
import h7 from "./assets/images/h7.webp";
import h8 from "./assets/images/h8.webp";
import h9 from "./assets/images/h9.webp";
import h10 from "./assets/images/h10.webp";
import h11 from "./assets/images/h11.webp";
import h12 from "./assets/images/h12.webp";
import i1 from "./assets/images/i1.webp";
import i2 from "./assets/images/i2.webp";
import i3 from "./assets/images/i3.webp";
import i4 from "./assets/images/i4.webp";
import i5 from "./assets/images/i5.webp";
import i6 from "./assets/images/i6.webp";
import i7 from "./assets/images/i7.webp";
import i8 from "./assets/images/i8.webp";
import i9 from "./assets/images/i9.webp";
import i10 from "./assets/images/i10.webp";
import i11 from "./assets/images/i11.webp";
import i12 from "./assets/images/i12.webp";

const Companies = () => {
  return (
    <>
      <div className="flex-comp">
        <div>
          <div>
            <h1 className="c-Tag">
              More Than <span className="comp">2000+</span> students have
              upskilled with SsquareIT Solutions
            </h1>
          </div>
        </div>
        <div className="ccompany-main">
          <div className="main-bar">
            <Marquee gradient="true" gradientWidth={30} speed={50}>
              <div className="element-comp">
                <Image src={g1} alt="" />
              </div>
              <div className="element-comp">
                <Image src={g2} alt="" />
              </div>
              <div className="element-comp">
                <Image src={g3} alt="" />
              </div>
              <div className="element-comp">
                <Image src={g4} alt="" />
              </div>
              <div className="element-comp">
                <Image src={g5} alt="" />
              </div>
              <div className="element-comp">
                <Image src={g6} alt="" />
              </div>
              <div className="element-comp">
                <Image src={g7} alt="" />
              </div>
              <div className="element-comp">
                <Image src={g8} alt="" />
              </div>
              <div className="element-comp">
                <Image src={g9} alt="" />
              </div>
              <div className="element-comp">
                <Image src={g10} alt="" />
              </div>
              <div className="element-comp">
                <Image src={g11} alt="" />
              </div>
              <div className="element-comp">
                <Image src={g12} alt="" />
              </div>
            </Marquee>
          </div>

          <div className="main-bar">
            <Marquee
              gradient="true"
              gradientWidth={30}
              direction="right"
              speed={50}
            >
              <div className="element-comp">
                <Image src={h1} alt="" />
              </div>
              <div className="element-comp">
                <Image src={h2} alt="" />
              </div>
              <div className="element-comp">
                <Image src={h3} alt="" />
              </div>
              <div className="element-comp">
                <Image src={h4} alt="" />
              </div>
              <div className="element-comp">
                <Image src={h5} alt="" />
              </div>
              <div className="element-comp">
                <Image src={h6} alt="" />
              </div>
              <div className="element-comp">
                <Image src={h7} alt="" />
              </div>
              <div className="element-comp">
                <Image src={h8} alt="" />
              </div>
              <div className="element-comp">
                <Image src={h9} alt="" />
              </div>
              <div className="element-comp">
                <Image src={h10} alt="" />
              </div>
              <div className="element-comp">
                <Image src={h11} alt="" />
              </div>
              <div className="element-comp">
                <Image src={h12} alt="" />
              </div>
            </Marquee>
          </div>

          <div className="main-bar">
            <Marquee gradient="true" gradientWidth={30} speed={50}>
              <div className="element-comp">
                <Image src={i1} alt="" />
              </div>
              <div className="element-comp">
                <Image src={i2} alt="" />
              </div>
              <div className="element-comp">
                <Image src={i3} alt="" />
              </div>
              <div className="element-comp">
                <Image src={i4} alt="" />
              </div>
              <div className="element-comp">
                <Image src={i5} alt="" />
              </div>
              <div className="element-comp">
                <Image src={i6} alt="" />
              </div>
              <div className="element-comp">
                <Image src={i7} alt="" />
              </div>
              <div className="element-comp">
                <Image src={i8} alt="" />
              </div>
              <div className="element-comp">
                <Image src={i9} alt="" />
              </div>
              <div className="element-comp">
                <Image src={i10} alt="" />
              </div>
              <div className="element-comp">
                <Image src={i11} alt="" />
              </div>
              <div className="element-comp">
                <Image src={i12} alt="" />
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </>
  );
};

export default Companies;
