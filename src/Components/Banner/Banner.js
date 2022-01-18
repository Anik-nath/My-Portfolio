import ParticlesBg from "particles-bg";
import React from "react";
import "./banner.css";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
   
      <div className="coverContainer">
         <div className="overlay">
          <ParticlesBg num={60} color="#f1f1f1" type="cobweb" bg={true} />
        </div>
        <div className="coverTitle text-white text-center">
          <h2 className="display-4 type">
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
          <div className="">
            <Link to="/contact">
            <button className="myButton mt-3 ">Contact Now</button>
            </Link>
          </div>
        </div>
       
      </div>
    
  );
};

export default Banner;

//  
