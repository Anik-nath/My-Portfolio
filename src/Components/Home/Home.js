import React from "react";
import { Suspense } from "react";
// import About from "../About/About";
// import Banner from "../Banner/Banner";
// import Contact from "../Contact/Contact";
// import Projects from "../Projects/Projects";
// import Review from "../Review/Review";
const Banner = React.lazy(() => import("../Banner/Banner"));
const Contact = React.lazy(() => import("../Contact/Contact"));
const About = React.lazy(() => import("../About/About"));
const Review = React.lazy(() => import("../Review/Review"));
const Projects = React.lazy(() => import("../Projects/Projects"));

const Home = () => {
  return (
    <div>
      <div className="banner">
      <Suspense fallback={<div>Loading...</div>}>
          <Banner />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <About />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Projects />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Review />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Contact />
        </Suspense>
        {/* <Banner></Banner>
        <Projects></Projects>
        <Review></Review>
        <Contact></Contact> */}
      </div>
    </div>
  );
};

export default Home;
