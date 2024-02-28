"use client";
import React, { useEffect, useState } from "react";

import { useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { FaCheck } from "react-icons/fa";
import "./Placements.css";
import "./Youtube.css";
import logo from "../assets/y-logo.png";
function Youtube() {
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
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        "https://www.googleapis.com/youtube/v3/search?key=AIzaSyDebnm62yUX5MQaB1BrqUExMVJ2KqToHFo&channelId=UCcMmwWhgdFCrO31Ff48UIOA&part=snippet%2Cid&order=date&maxResults=10"
      );
      setData(await data.json());
    }
    fetchData();
  }, []);
  return (
    <div className="main-youtube-component">
      <div className="hading-main">
        <h1 className="heading-youtube">WATCH US ON :</h1>
        <Image className="y-logo" src={logo} />
      </div>
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
        {data?.items?.map((item) => {
          const { id, snippet = {} } = item;
          const { title, thumbnails = {}, resourceId } = snippet;
          const { high = {} } = thumbnails;
          return (
            <div key="index">
              <a
                href={`https://www.youtube.com/watch?v=${id?.videoId} `}
                target="_blank"
              >
                <div className="card-outer-you">
                  <Image
                    className="youtube-thumb"
                    width={high.width}
                    height={high.height}
                    src={high.url}
                    alt=""
                  />
                  <h3 className="heading-thumbnail">{title}</h3>
                </div>
              </a>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
export default Youtube;
