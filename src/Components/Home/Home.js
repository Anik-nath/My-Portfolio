import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import Review from "../Review/Review";
const Home = () => {
  return (
    <div>
      <div className="banner">
        <Banner></Banner>
        <About></About>
        <Projects></Projects>
        <Review></Review>
        <Contact></Contact>
      </div>
    </div>
  );
};

export default Home;
