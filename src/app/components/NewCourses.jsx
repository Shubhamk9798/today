"use client";
import React from "react";
import { useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { FaCheck } from "react-icons/fa";
import "./Placements.css";
import "./NewCourses.css";

const NewCourses = ({ data }) => {
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
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1424,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },

      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 2,
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
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <>
      <>
        <h2
          id="Placements"
          className="text-center block my-8 text-3xl font-bold"
        >
          Our Recent Courses On Our App
        </h2>
        <div className="buttons-flex">
          <button
            className="Next-button btn"
            onClick={() => slider.current.slickPrev()}
          >
            <GrPrevious />
          </button>
          <button
            className="prev-button btn"
            onClick={() => slider.current.slickNext()}
          >
            <GrNext />
          </button>
        </div>

        <Slider ref={slider} {...settings}>
          {data?.map((d) => {
            return (
              <div className="container-all" key={data?.index}>
                <a
                  href="https://play.google.com/store/apps/details?id=co.mark.olvye"
                  target="_blank"
                >
                  <div className="div-main-c bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
                    <Image
                      alt="Office"
                      src={d?.image.url}
                      width="300"
                      height="300"
                      className="mx-auto "
                    />
                    <h1 className="heading-p">{d?.coursetitle}</h1>
                    <div className="price-flex">
                      <p>{d?.discountedPrice}</p>
                      <s>{d?.price}</s>
                    </div>
                    <p className="bestseller">{d?.bestseller}</p>
                  </div>
                </a>
              </div>
            );
          })}
        </Slider>
      </>
    </>
  );
};

export default NewCourses;
