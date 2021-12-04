import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import project1 from "../../images/p1.png";
import project2 from "../../images/p2.png";
import project3 from "../../images/p3.png";
import Aos from 'aos';

const Projects = () => {
  useEffect(()=>{
    Aos.init({duration:1000})
},[])
  return (
    <div className="bg-dark text-white py-5">
      <div className="container pt-5">
        <div className="row">
          <div className="col-12">
            <h2 className="position-relative pb-5 text-uppercase">
              Featured Work
              <span
                style={{
                  color: "transparent",
                  WebkitTextStroke: "1px #ffffff20",
                  fontSize: "56px",
                }}
                className="position-absolute start-0 bottom-50 mb-2 text-uppercase"
              >
                ALl Projects
              </span>
            </h2>
          </div>
        </div>
        <div className="row">
          <div data-aos="fade-right" className="col-lg-4 col-md-4 col-12">
            <Card className="bg-dark border text-center">
              <Card.Img variant="top" src={project2} />
              <Card.Body>
                <Card.Title>Travel Booking</Card.Title>
                <Card.Text className="d-flex flex-wrap gap-2 py-2">
                  <span className="border px-2 rounded-pill">HTML5</span>
                  <span className="border px-2 rounded-pill">CSS3</span>
                  <span className="border px-2 rounded-pill">Bootstrap</span>
                  <span className="border px-2 rounded-pill">REACT</span>
                  <span className="border px-2 rounded-pill">FIREBASE</span>
                  <span className="border px-2 rounded-pill">MONGODB</span>
                  <span className="border px-2 rounded-pill">NODE JS</span>
                </Card.Text>

                <div className="d-flex justify-content-center gap-2">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://travel-site-4b05c.web.app/"
                    className="btn btn-primary rounded-pill"
                  >
                    Live Link
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Anik-nath/TOURISM-SITE"
                    className="btn btn-primary rounded-pill"
                  >
                    Code Link
                  </a>
                  <a href="#!" className="btn btn-primary rounded-pill">
                    Details
                  </a>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div data-aos="fade-up" className="col-lg-4 col-md-4 col-12 my-5 my-lg-0 my-md-0">
          <Card className="bg-dark border text-center">
              <Card.Img variant="top" src={project1} />
              <Card.Body>
                <Card.Title>Cycle Shop</Card.Title>
                <Card.Text className="d-flex flex-wrap gap-2 py-2">
                  <span className="border px-2 rounded-pill">HTML5</span>
                  <span className="border px-2 rounded-pill">CSS3</span>
                  <span className="border px-2 rounded-pill">TAILWIND</span>
                  <span className="border px-2 rounded-pill">REACT</span>
                  <span className="border px-2 rounded-pill">FIREBASE</span>
                  <span className="border px-2 rounded-pill">MONGODB</span>
                  <span className="border px-2 rounded-pill">NODE JS</span>
                </Card.Text>

                <div className="d-flex justify-content-center gap-2">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://cycle-shop-62d0c.web.app/home"
                    className="btn btn-primary rounded-pill"
                  >
                    Live Link
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Anik-nath/CYCLE-SHOP"
                    className="btn btn-primary rounded-pill"
                  >
                    Code Link
                  </a>
                  <a href="#!" className="btn btn-primary rounded-pill">
                    Details
                  </a>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div data-aos="fade-left" className="col-lg-4 col-md-4 col-12">
          <Card className="bg-dark border text-center">
              <Card.Img variant="top" src={project3} />
              <Card.Body>
                <Card.Title>Medi Care</Card.Title>
                <Card.Text className="d-flex flex-wrap gap-2 py-2">
                  <span className="border px-2 rounded-pill">HTML5</span>
                  <span className="border px-2 rounded-pill">CSS3</span>
                  <span className="border px-2 rounded-pill">Bootstrap</span>
                  <span className="border px-2 rounded-pill">REACT</span>
                  <span className="border px-2 rounded-pill">FIREBASE</span>
                  <span className="border px-2 rounded-pill">NODE JS</span>
                </Card.Text>

                <div className="d-flex justify-content-center gap-2">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://health-care-73f51.web.app/"
                    className="btn btn-primary rounded-pill"
                  >
                    Live Link
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Anik-nath/HEALTH-CARE"
                    className="btn btn-primary rounded-pill"
                  >
                    Code Link
                  </a>
                  <a href="#!" className="btn btn-primary rounded-pill">
                    Details
                  </a>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
