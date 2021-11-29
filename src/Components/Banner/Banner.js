import ParticlesBg from "particles-bg";
import React from "react";
import "./banner.css";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div className="coverContainer">
        <div className="coverTitle text-white text-center">
          <h2 className="display-4">
            I'm a <br />
            <span className="h1">
              <Typewriter
                options={{
                  strings: ["Web Developer.", "Web Desiner."],
                  autoStart: true,
                  loop: true,
                }}
              />{" "}
            </span>
          </h2>
          <Link to="/contact">
          <button className="btn btn-primary mt-3 rounded-pill">Read more</button>
          </Link>
        </div>
        <div className="overlay">
          <ParticlesBg num={60} color="#f1f1f1" type="cobweb" bg={true} />
        </div>
      </div>
    </div>
  );
};

export default Banner;

//  
