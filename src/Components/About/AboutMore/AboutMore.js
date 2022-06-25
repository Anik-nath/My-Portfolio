import React, { useEffect, useState } from "react";
import {Tabs,Tab,Row,Col,Card} from "react-bootstrap"
import certificate from "../../../images/certificate.PNG";
import { ProgressBar } from "react-bootstrap";
import Aos from "aos";

const AboutMore = () => {
  const [skills,setSkills] = useState([]);
  const [tools,setTools] = useState([]);

  useEffect(() =>{
      fetch('./skills.json')
      .then(res => res.json())
      .then(data => setSkills(data))
  },[]);

  useEffect(() =>{
      fetch('./tools.json')
      .then(res => res.json())
      .then(data => setTools(data))
  },[]);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div id="about-more" className="myBgColor text-white py-5">
      <div className="container mt-5">
        {/* about me */}
        <div className="row py-5">
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
        <Tabs defaultActiveKey="skills"
          transition={false}
          id="noanim-tab-example"
          className="mb-3"
        >
          <Tab className="text-danger" eventKey="skills" title="Skills">
            <Row className="py-3">
              {
                skills.map(skill => 
                  <Col className="d-flex justify-content-center" key={skill.skillName} md={2} sm={4} xs={4}>
                  <Card style={{width: "100px",height:"100px"}} className="rounded-circle mx-2 my-3 border">
                    <img
                      loading="lazy"
                      className="w-100 h-100 p-4"
                      src={skill.skillImage}
                      alt=""
                    />
                  </Card>
                </Col>
                  )
              }
            </Row>
          </Tab>
          <Tab eventKey="tools" title="Tools">
          <Row className="py-3">
              {
                tools.map(tool => 
                  <Col className="d-flex justify-content-center" key={tool.toolsName} md={3} sm={4} xs={4}>
                  <Card style={{width: "100px",height:"100px"}} className="rounded-circle mx-2 my-3 border">
                    <img
                      loading="lazy"
                      className="w-100 h-100 p-4"
                      src={tool.toolsImage}
                      alt="tool icon"
                    />
                  </Card>
                </Col>
                  )
              }
            </Row>
          </Tab>
          <Tab eventKey="education" title="Education">
           <Row>
            <Col md={6} sm={6}>
              <div className="card text-black p-4 mb-4">
                <h6 className="fw-bold">Premier University, Chittagong</h6>
                <p><span className="text-success fw-bold">Present -</span> B.sc in CSE</p>
              </div>
            </Col>
            <Col md={6} sm={6}>
              <div className="card text-black p-4 mb-4">
                <h6 className="fw-bold">BAF Shaheen Collage, Chittagong</h6>
                <p><span className="text-success fw-bold">2018-</span> Higher Secondary Certificate</p>
              </div>
            </Col>
            <Col md={6} sm={6}>
              <div className="card text-black p-4 mb-4">
                <h6 className="fw-bold">Jafar Nagar A.C High School, Sitakund, Chittagong</h6>
                <p><span className="text-success fw-bold">2016-</span> Secondary School Certificate</p>
              </div>
            </Col>
           </Row>
          </Tab>
        </Tabs>
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
