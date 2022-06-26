import React from "react";
import {Row, Col} from "react-bootstrap";
import services1 from "../../images/shape.482143e4.png";
import services2 from "../../images/shape-2.a49e63ca.png";
import services3 from "../../images/shape-3.9d276bde.png";

const WhatIDo = () => {
  return (
    <div className="myBgColor py-5">
      <div className="container">
        <div id="section-header" className="row">
          <div className="col-12">
            <h2 className="position-relative pb-5 my-title">
              What I Do?
              <span
                className="position-absolute start-0 bottom-50 mb-2 text-uppercase"
              >
               Services
              </span>
            </h2>
          </div>
        </div>
        <div id="section-content">
            <Row>
                <Col className="d-flex flex-row align-items-center" md={4} sm={12}>
                    <div style={{width: "250px", heigth:"250px"}}>
                        <img className="w-100" src={services1} alt="services logo" />
                    </div>
                    <div className="ms-4">
                        <h5 className="light-base-text">Web Development</h5>
                        <p className="mb-0 light-base-text text-justify pt-1">Build Web application with using React or NextJs, Tailwind or MUI With NodeJS, MongoDB.</p>
                    </div>
                </Col>
                <Col className="d-flex flex-row align-items-center my-lg-0 my-5" md={4} sm={12}>
                    <div style={{width: "250px", heigth:"250px"}}>
                        <img className="w-100" src={services2} alt="services logo" />
                    </div>
                    <div className="ms-4">
                        <h5 className="light-base-text">Web Solution</h5>
                        <p className="mb-0 light-base-text text-justify pt-1">Fix Website error or Bug or any issue and provide solution for your web appliction.</p>
                    </div>
                </Col>
                <Col className="d-flex flex-row align-items-center" md={4} sm={12}>
                    <div style={{width: "250px", heigth:"250px"}}>
                        <img className="w-100" src={services3} alt="services logo" />
                    </div>
                    <div className="ms-4">
                        <h5 className="light-base-text">Web Design</h5>
                        <p className="mb-0 light-base-text text-justify pt-1">Design unique and responsive web application using html5, CSS3, Bootstrap5.</p>
                    </div>
                </Col>
            </Row>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
