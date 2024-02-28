"use client";

import { useEffect, useState } from "react";
import { queryHomepage } from "./services";
import Home from "./components/Home";
import Courses from "./components/Courses";
import Placements from "./components/Placements";

import { Placementh } from "./components/Placementh";
import Companies from "./components/Comanies";
import Review from "./components/Review";
import Upcoming from "./components/Upcoming";
import Anouncer from "./components/Anouncer";
import FAQ from "./components/Faq";
import Contact from "../../pages/Contact";
import NewCourses from "./components/NewCourses";
import Youtube from "./components/Youtube";
export default function Page() {
  const [data, setData] = useState();

  useEffect(() => {
    getBannerData();
  }, []);

  const getBannerData = async () => {
    const res = await queryHomepage();

    setData(res);
    return;
  };

  return (
    <main className="min-h-screen">
      <Anouncer data={data?.highlighters} />
      <Home />
      <Placements data={data?.placements} />
      <NewCourses data={data?.newcourses} />
      <Courses data={data?.courses} />
      <Upcoming data={data?.upcomingbatches} />
      <Placementh />
      <Companies />
      <Review />

      <Contact />
      <Youtube />

      <FAQ />
    </main>
  );
}
