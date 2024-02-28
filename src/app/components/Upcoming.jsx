import React from "react";
import img from "../assets/OBJECTS.png";
import Image from "next/image";
import "./Upcoming.css";
const Upcoming = ({ data }) => {
  return (
    <div className="upcoming">
      <h1 className="heading-up">Upcoming Batches</h1>
      <div className="upcom-flex">
        <div className="left-up">
          <Image className="vector-r" src={img} alt="vector" />
        </div>
        <div className="right-up">
          <div className="outer-cardline">
            {data?.map((d) => {
              return (
                <div key={d?.index}>
                  <div className="outer-wrapper-main">
                    <div className="wrapper-up">
                      <p className="course-h">{d?.coursename}</p>
                      <p className="course-m">
                        {d?.batchdescription}{" "}
                        <span className="batchanouncer">{d?.startdate}</span>
                      </p>
                      <p className="course-m-s">Seats: {d?.seatsinbatch}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
