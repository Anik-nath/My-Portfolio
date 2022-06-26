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
    <div id="about-more" className="myBgColor light-base-text py-5">
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
              <h6 className="my-secondary-text">What my skills?</h6>
            </div>
            <div style={{ textAlign: "justify" }} className="my-secondary-text ">
              <p>
                My name is Anik Deb nath from Chittagong,Bangladesh. I am a Web Developer also student of CSE Dept. I am passionate about learning and development with a desire to apply skills to a larger development team to tackle more complex problems and continue to find ways to maximize user efficiency.
              </p>
              <p>
                Talented with many technologies including HTML5, CSS3, Javascript , React , Next Js, Tailwind , Material Ui, Node js, Express Js, Firebase and so on. My work is of highest quality, fully responsive, and tested on many devices.
              </p>
              <p>
              Completed a long time training form Programming-hero where I finished 12+ project successfully. Worked to build a multivendor eCommerce site with git collaboration in a team - winningdev in Agile(scrum) development process.
              </p>
            </div>
            <div id="cv-button" className="mt-5">
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
        {/* skills, tools & education start */}
        <Tabs defaultActiveKey="skills"
          transition={false}
          id="noanim-tab-example"
          className="mb-4"
        >
          <Tab className="light-tab-bg" eventKey="skills" title="Skills">
            <Row className="py-3">
              {
                skills.map(skill => 
                  <Col className="d-flex justify-content-center" key={skill.skillName} md={2} sm={4} xs={4}>
                  <Card style={{width: "100px",height:"100px"}} className="rounded-circle mx-2 my-3 border shadow">
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
          <Tab className="light-tab-bg" eventKey="tools" title="Tools">
          <Row className="py-3">
              {
                tools.map(tool => 
                  <Col className="d-flex justify-content-center" key={tool.toolsName} md={3} sm={4} xs={4}>
                  <Card style={{width: "100px",height:"100px"}} className="rounded-circle mx-2 my-3 border shadow">
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
          <Tab className="light-tab-bg" eventKey="education" title="Education">
           <Row className="p-3">
            <Col md={6} sm={6}>
              <div className="card text-black p-4 mb-4 shadow">
                <h6 className="fw-bold">Premier University, Chittagong</h6>
                <p><span className="text-success fw-bold">Present -</span> B.sc in CSE</p>
              </div>
            </Col>
            <Col md={6} sm={6}>
              <div className="card text-black p-4 mb-4 shadow">
                <h6 className="fw-bold">BAF Shaheen Collage, Chittagong</h6>
                <p><span className="text-success fw-bold">2018-</span> Higher Secondary Certificate</p>
              </div>
            </Col>
            <Col md={6} sm={6}>
              <div className="card text-black p-4 mb-4 shadow">
                <h6 className="fw-bold">Jafar Nagar A.C High School, Sitakund, Chittagong</h6>
                <p><span className="text-success fw-bold">2016-</span> Secondary School Certificate</p>
              </div>
            </Col>
           </Row>
          </Tab>
        </Tabs>
        {/* skills, tools & education end */}
      </div>
      <div id="certificates-section" className="container mt-5 py-5">
        <div className="col-12 text-center pb-4">
          <h3 className="">
            <i className="fas fa-trophy text-warning"></i> Got Certificates
          </h3>
        </div>
        <div className="row">
          <div className="col-lg-6 mx-auto text-center mb-3 m-1">
            <img loading="lazy" className="w-100 border border-dark" src="https://i.ibb.co/YhFmvf7/certificate-1.jpg" alt="" />
          </div>
          <div className="col-lg-6 mx-auto text-center mb-3 m-1">
            <img loading="lazy" className="w-100 border" src={certificate} alt="" />
          </div>
        </div>
        <div id="recommendation-button" className="mt-4 d-flex justify-content-center">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://drive.google.com/file/d/19Xxy5i6AVG9U1ZUTC_Wc4Mn6v9TwLlUe/view?usp=sharing"
                className="myButton mt-3 m rounded-pill"
              >
                See Recommendation <i className="fas fa-eye"></i>
              </a>
            </div>
      </div>
    </div>
  );
};

export default AboutMore;
//
