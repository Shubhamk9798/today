import Image from "next/image";
import "./Courses.css";
import tick from "../assets/check-mark.png";
import Link from "next/link";
import React from "react";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

export default function Courses({ data }) {
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
        <h2 id="Courses" className="text-center block my-8 text-3xl font-bold">
          Our courses
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
          {data?.map((service) => {
            return (
              <div className="main-courses-anim" key={data?.index}>
                <div className="outer-card-border bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
                  <Image
                    alt="Office"
                    src={service?.courseImage?.url}
                    width="370"
                    height="300"
                    className="course-Image"
                  />
                  <div className="outer-flex-category">
                    <div>
                      <h1 className="category-course">
                        {service?.courseCategory}
                      </h1>
                      <h1 className="title_course">{service?.couseName}</h1>
                    </div>
                    <div>
                      <h1 className="duration-course">
                        Duration {service?.courseDuration}
                      </h1>
                    </div>
                  </div>
                  <h1 className="carriculam">curriculum</h1>
                  <div className="discrition-main">
                    <p className="descr">
                      <div className="flex-curriculam">
                        <Image
                          className="tick"
                          src={tick}
                          width={20}
                          height={10}
                        />
                        <p>{service?.descriptionOfCourse}</p>
                      </div>
                    </p>
                    <p className="descr">
                      <div className="flex-curriculam">
                        <Image
                          className="tick"
                          src={tick}
                          width={20}
                          height={10}
                        />
                        <p>{service?.description2}</p>
                      </div>
                    </p>
                    <p className="descr">
                      <div className="flex-curriculam">
                        <Image
                          className="tick"
                          src={tick}
                          width={20}
                          height={10}
                        />
                        <p>{service?.description3}</p>
                      </div>
                    </p>

                    <p className="descr">
                      <div className="flex-curriculam">
                        <Image
                          className="tick"
                          src={tick}
                          width={20}
                          height={10}
                        />
                        <p className="wrap">{service?.description4}</p>
                      </div>
                    </p>
                  </div>
                  <div className="buttons-outer-d">
                    <div className="flex-button">
                      <a rel="stylesheet" href={service?.brochure?.url}>
                        <h1 className="brochure-button">brochure</h1>
                      </a>
                      <Link
                        href={`/course/${service?.slug}`}
                        className="brochure-button-2"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </>
    </>
  );
}
