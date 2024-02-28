"use client";
import "./subpage.css";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { getSingleCourse } from "@/app/services/index";

export default function Coursedetail({ params }) {
  const [courseDetail, setCourseDetail] = useState(null);

  const getcourseDetail = async () => {
    const courseDetail = await getSingleCourse(params.slug);
    setCourseDetail(courseDetail);
    return;
  };

  useEffect(() => {
    getcourseDetail();
  }, []);

  return (
    <>
      <div className="min-h-screen">
        {courseDetail && (
          <div className="max-w-[800px] mx-auto py-10">
            <div className="pb-4">
              <Link
                href={`/`}
                className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-green-600"
              >
                <span
                  aria-hidden="true"
                  className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                >
                  &larr;
                </span>
                Go back
              </Link>
            </div>
            <p>{courseDetail?.courses[0]?.courseCategorymainpage}</p>
            <h1 className="text-left block my-4 text-3xl font-bold">
              {courseDetail?.courses[0]?.nameOfCoursemainpage}
            </h1>

            <Image
              alt="Office"
              src={courseDetail?.courses[0]?.courseBanner?.url}
              width="400"
              height="400"
              className="w-full object-cover"
            />
            <p className="full-description">
              {courseDetail?.courses[0]?.fullDescriptionOfCourse?.text}
            </p>
            <p className="subheading">
              {courseDetail?.courses[0]?.subdescriptionmain}
            </p>
            <div className="course-content">
              <p>{courseDetail?.courses[0]?.point1}</p>
              <p>{courseDetail?.courses[0]?.point2}</p>
              <p>{courseDetail?.courses[0]?.point3}</p>
              <p>{courseDetail?.courses[0]?.point4}</p>
              <p>{courseDetail?.courses[0]?.point5}</p>
              <p>{courseDetail?.courses[0]?.point6}</p>
              <p>{courseDetail?.courses[0]?.point7}</p>
              <p>{courseDetail?.courses[0]?.point8}</p>
              <p>{courseDetail?.courses[0]?.point9}</p>
              <p>{courseDetail?.courses[0]?.point10}</p>
              <p>{courseDetail?.courses[0]?.point11}</p>
              <p>{courseDetail?.courses[0]?.point12}</p>
              <p>{courseDetail?.courses[0]?.point13}</p>
              <p>{courseDetail?.courses[0]?.point14}</p>
            </div>

            <br />
            <div />
          </div>
        )}
      </div>
    </>
  );
}
