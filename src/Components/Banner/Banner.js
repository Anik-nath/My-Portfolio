// import ParticlesBg from "particles-bg";
import React, { useEffect } from "react";
import "./banner.css";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import Particles from "react-tsparticles";
import Aos from "aos";

const Banner = () => {
  const particlesInit = (main) => {};
  const particlesLoaded = (container) => {};
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="coverContainer">
      <div className="overlay">
        {/* <ParticlesBg num={60} color="#f1f1f1" type="cobweb" bg={true} /> */}
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fpsLimit: 60,
            fullScreen: false,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  // mode: "repulse",
                  mode: "bubble",
                },
                resize: true,
              },
              modes: {
                bubble: {
                  // distance: 400,
                  // duration: 2,
                  opacity: 0.8,
                  // size: 40,
                  size: 10,
                  color: {
                    value: "#01d85f",
                  },
                },
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ccc",
              },
              links: {
                color: "#ccc",
                distance: 150,
                enable: true,
                opacity: 0.2,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 0.5,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  value_area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                random: true,
                value: 5,
              },
            },
            detectRetina: true,
          }}
        />
      </div>
      <div className="coverTitle text-white text-center w-100">
        <h2 className="display-4 type">
          I'm a <br />
          <span className="h1">
            <Typewriter
              options={{
                strings: ["Web Developer.", "Web Desiner.", "React Developer."],
                autoStart: true,
                loop: true,
              }}
            />{" "}
          </span>
        </h2>
        <div className="container d-flex justify-content-center align-items-center my-3 ">
          <div id="social" className="d-flex gap-4">
              <a data-aos="fade-down" className='text-white-50' href="https://www.facebook.com/aaroon.fince/"><i className="fab fa-facebook h4 facebook"></i></a>
              <a data-aos="fade" className='text-white-50' href="https://twitter.com/aniknathdev"><i className="fab fa-twitter h4 twitter"></i></a>
              <a data-aos="fade-down" className='text-white-50' href="https://www.linkedin.com/in/anik-deb-nath-26aa22190/"><i className="fab fa-linkedin h4 linkedin"></i></a>
              <a data-aos="fade" className='text-white-50' href="https://github.com/Anik-nath"><i className="fab fa-github h4 github"></i></a>
              <a data-aos="fade-down" className='text-white-50' href="#!"><i className="fab fa-instagram h4 instagram"></i></a>
          </div>
        </div>
        <div className="contact-button rounded-pill">
          <Link to="/contact">
            <button className="myButton">Contact Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;

//
