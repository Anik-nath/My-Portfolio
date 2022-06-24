import React, { useEffect } from "react";
// import skill1 from "../../../images/html.png";
// import skill2 from "../../../images/css.png";
// import skill3 from "../../../images/bootstrap.png";
// import skill4 from "../../../images/react.png";
// import skill5 from "../../../images/js.png";
// import skill6 from "../../../images/mongo.png";
// import skill7 from "../../../images/nodejs.png";
// import skill8 from "../../../images/Firebase.PNG";
// import skill9 from "../../../images/tailwind.PNG";
// import skill10 from "../../../images/MaterialUI.PNG";
// import skill11 from "../../../images/express-1.png";
// import tools1 from "../../../images/git.PNG";
// import tools2 from "../../../images/npm.PNG";
// import tools3 from "../../../images/Github.PNG";
// import tools4 from "../../../images/vscode.PNG";
// import tools5 from "../../../images/Heroku.PNG";
// import tools6 from "../../../images/Firebase.PNG";
import certificate from "../../../images/certificate.PNG";
import { ProgressBar } from "react-bootstrap";
import Aos from "aos";

const AboutMore = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div id="about-more" className="myBgColor text-white py-5">
      <div className="container mt-5">
        {/* about me */}
        <div className="row pt-5">
          <div className="col-lg-4 col-md-6 col-12 text-left">
            <img
              loading="lazy"
              data-aos="fade-up-right"
              className="w-100"
              src="https://i.ibb.co/wQvZJRj/moreshape-2.png"
              alt=""
            />
          </div>
          <div className="col-lg-8 col-md-6 col-12  mt-5 mt-md-0 mt-lg-0">
            <div className="mb-5">
              <h3 className="mb-0 text-uppercase">Who am i?</h3>
              <h6 className="text-white-50">What my skills?</h6>
            </div>
            <div style={{ textAlign: "justify" }} className="text-white-50 ">
              <p>
                My name is Anik Deb nath. I am a Web Developer, and I'm very
                passionate and dedicated to my work. I am a person who is
                positive in every aspect of life.
              </p>
              <p>
                I have vast knowledge in html, css, Javascript , React
                (javascript framewok), Tailwind , Material Ui, Firebase and so
                on. The work I provide is of highest quality, fully responsive,
                and tested in a wide range of devices.
              </p>
              <div className="row g-3">
                <div className="col-12">
                  <small className="text-light">Good Personality</small>
                  <ProgressBar
                    variant="secondary"
                    style={{ height: "5px" }}
                    now={95}
                  />
                </div>
                <div className="col-12 mb-2">
                  <small className="text-light">Focusd on Work</small>
                  <ProgressBar
                    variant="secondary"
                    style={{ height: "5px" }}
                    now={90}
                  />
                </div>
              </div>
            </div>
            <div className="mt-4">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://drive.google.com/file/d/1dGazoOhs4b0-E_Z2icH8fWOmCaaTVuPy/view?usp=sharing"
                className="myButton mt-3 m rounded-pill"
              >
                Download CV <i className="fas fa-download"></i>
              </a>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
      <div className="container mt-5">
        <div className="col-12 text-center pb-4">
          <h3>
            <i className="fas fa-trophy text-warning"></i> Got Certificates
          </h3>
        </div>
        <div className="row">
          <div className="col-lg-6 mx-auto text-center">
            <img loading="lazy" className="w-100" src={certificate} alt="" />
            <div className="my-5">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.freecodecamp.org/certification/anikdebnath/responsive-web-design"
                className="myButton mt-3 rounded-pill"
              >
                Check Certificates
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMore;
//
