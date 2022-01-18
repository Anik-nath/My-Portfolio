import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import image from "../../images/about.png";
import signature from "../../images/signature.png";
import Aos from "aos";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div id="aboutme" className="myBgColor text-light py-5">
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <h1 className="position-relative pb-5 my-title">
              About Me
              <span
                style={{
                  color: "transparent",
                  WebkitTextStroke: "1px #ffffff20",
                  fontSize: "56px",
                }}
                className="position-absolute start-0 bottom-50 mb-2 text-uppercase"
              >
                Introduction
              </span>
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12">
            <img data-aos="fade-right" className="w-100" src={image} alt="" />
          </div>
          <div
            data-aos="fade-up"
            className="col-lg-6 col-md-6 col-12 mt-5 mt-md-0 mt-lg-0"
          >
            <div className="mb-5">
            
              <h6 className="text-light">Hello There !</h6>
            </div>
            <div
              style={{ textAlign: "justify" }}
              className="text-light"
            >
              <p>
                My name is Anik Deb nath. I am a Web Developer, and I'm very
                passionate and dedicated to my work. I am a person who is positive in every aspect of life.
              </p>
              <p>
                I have vast knowledge in html, css, Javascript , React
                (javascript framewok), Tailwind , Material Ui, Firebase and so
                on. The work I provide is of highest quality, fully responsive,
                and tested in a wide range of devices.
              </p>
              <div>
                <img src={signature} alt="" />
              </div>
            </div>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/file/d/1dGazoOhs4b0-E_Z2icH8fWOmCaaTVuPy/view?usp=sharing"
              className="myButton mt-3 rounded-pill"
            >
              Download CV <i className="fas fa-download"></i>
            </a>
            <Link to="/about">
              <button className="myButton mt-3 rounded-pill ms-3">
                Read More...
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
