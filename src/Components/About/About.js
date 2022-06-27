import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import {Row,Col} from "react-bootstrap"

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div id="aboutme" className="myBgColor text-light py-5">
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <h2 className="position-relative pb-5 my-title">
              About Me
              <span

                className="position-absolute start-0 bottom-50 mb-2 text-uppercase"
              >
                Intro
              </span>
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12">
            <img loading="lazy" data-aos="fade-right" className="w-full img-fluid" src="https://i.ibb.co/W3vmNxJ/anikshape-2.png" alt="" />
          </div>
          <div
            data-aos="fade-up"
            className="col-lg-6 col-md-6 col-12 mt-5 mt-md-0 mt-lg-0"
          >
            <div className="mb-5">
            
              <h6 className="light-base-text">Hello There !</h6>
            </div>
            <div
              style={{ textAlign: "justify" }}
              className="text-light"
            >
              <p className="light-base-text">
               I am MERN stack Developer, and I'm very
                passionate and dedicated to my work. I am a person who is positive in every aspect of life.
              </p>
              <p className="light-base-text">
                My skill sets are HTML5, CSS3, Javascript , React , Next Js, Tailwind , Material Ui, Node js, Express Js, Firebase and so
                on. The work I provide is of highest quality, fully responsive,
                and tested in a wide range of devices.
              </p>
              <div id="infor" className="py-4 light-base-text">
                <Row>
                  <Col sm={6}>
                    <small>Fullname : Anik Deb Nath</small>
                  </Col>
                  <Col sm={6}>
                    <small>Address : Chittagong, Bangladesh</small>
                  </Col>
                  <Col sm={6}>
                    <small>Birthday : 03-11-2000</small>
                  </Col>
                  <Col sm={6}>
                    <small>Mail : anikdevnath03112000@gmail.com</small>
                  </Col>
                </Row>
              </div>
              {/* <div id="signature" className="">
                <img src={signature} alt="anik signature" />
              </div> */}
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
