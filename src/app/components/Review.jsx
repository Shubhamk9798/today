import React, { useRef } from "react";
import { data } from "./ReviewData";
import rimg from "../assets/p1.png";
import star from "../assets/p2.png";

import Image from "next/image";
import "./Review.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Review = () => {
  const slider = useRef(null);
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }
  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1424,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },

      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,

          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <>
      <section id="Placements">
        <h1 className="c-heading">What Our Student Says</h1>
        <div className="card-wrapper-main-2">
          <Slider ref={slider} {...settings}>
            {data.map((d) => (
              <>
                <div className="outline-card hover:scale-105 ease-in-out duration-300">
                  <div className="wrapper-top">
                    <Image className="review-i" src={rimg} alt="" />
                    <h1 className="name-rev">{d.name}</h1>
                  </div>
                  <div>
                    <Image className="star-r" src={star} alt="" />
                    <p className="review-r">{d.review}</p>
                  </div>
                </div>
              </>
            ))}
          </Slider>
        </div>
        <a
          href="https://www.google.com/search?q=ssquareit&sca_esv=2fefcfd3a8435a75&source=hp&ei=3ArfZd_GKNe4vr0Pu4GkiAk&iflsig=ANes7DEAAAAAZd8Y7GC2knmCQL7cZjai9JhxgfC43GnD&gs_ssp=eJzj4tVP1zc0LMlINzWwMK8yYLRSNagwTko2sjQ1SjI2NUpNtjQ2tzKosEg2MrM0S0tKsTA1Nks1MPPiLC4uLE0sSs0sAQBCHBKO&oq=ssq&gs_lp=Egdnd3Mtd2l6IgNzc3EqAggAMgsQLhivARjHARiABDILEC4YgAQYxwEY0QMyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgcQABiABBgKSNRFUOIHWKQ6cAx4AJABAJgBoAGgAYUNqgEEMC4xNLgBAcgBAPgBAZgCGqACqw6oAgrCAhAQLhgDGI8BGOUCGOoCGIwDwgIQEAAYAxiPARjlAhjqAhiMA8ICERAuGIAEGLEDGIMBGMcBGNEDwgILEAAYgAQYsQMYgwHCAggQABiABBixA8ICDhAAGIAEGIoFGLEDGIMBwgILEC4YgAQYsQMYgwHCAhEQLhiDARjHARixAxjRAxiABMICDhAuGIAEGIoFGLEDGIMBwgIIEC4YgAQY1AKYAwmSBwUxMi4xNA&sclient=gws-wiz#lrd=0x3bc2952b352ec937:0x8c2696fbd8536e06,1,,,,"
          target="_blank"
        >
          <h1 className="more-reviews">More Reviews</h1>
        </a>
      </section>
    </>
  );
};

export default Review;
