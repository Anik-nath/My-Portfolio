import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import Aos from "aos";
import { Link } from "react-router-dom";

const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="myBgColor text-white py-5">
      <div className="container pt-5">
        <div className="row">
          <div className="col-12">
            <h2 className="position-relative pb-5 my-title">
              Featured Work
              <span
                className="position-absolute start-0 bottom-50 mb-2 text-uppercase"
              >
                Projects
              </span>
            </h2>
          </div>
        </div>
        <div className="row">
          <div id="travel" className="col-lg-4 col-md-4 col-12">
            <Card className="cardbgColor text-center">
            <div className="window">
                <img loading="lazy" src="https://i.ibb.co/9Nw0B6c/screencapture-travel-site-4b05c-web-app-2022-01-19-21-59-43.png" alt="" />
             </div>
              <Card.Body>
                <Card.Title className="py-2">Travel Booking</Card.Title>
                <Card.Text className="d-flex flex-wrap gap-2 py-2">
                  <span className="border border-secondary px-2 rounded-pill">
                    HTML5
                  </span>
                  <span className="border border-secondary px-2 rounded-pill">
                    CSS3
                  </span>
                  <span className="border border-secondary px-2 rounded-pill">
                    Bootstrap
                  </span>
                  <span className="border border-secondary px-2 rounded-pill">
                    REACT
                  </span>
                  <span className="border border-secondary px-2 rounded-pill">
                    FIREBASE
                  </span>
                  <span className="border border-secondary px-2 rounded-pill">
                    MONGODB
                  </span>
                  <span className="border border-secondary px-2 rounded-pill">
                    NODE JS
                  </span>
                </Card.Text>

                <div className="d-flex justify-content-center gap-2">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://travel-site-4b05c.web.app/"
                    className="cardButton rounded-pill"
                  >
                    <i className="fas fa-eye"></i> Live Link
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Anik-nath/TOURISM-SITE"
                    className="cardButton rounded-pill"
                  >
                    Code Link
                  </a>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div id="foodmart" className="col-lg-4 col-md-4 col-12 my-5 my-lg-0 my-md-0">
            <Card className="cardbgColor text-center">
             <div className="window">
                <img loading="lazy" src="https://i.ibb.co/hgrjDzw/foodMart.png" alt="" />
             </div>
              <Card.Body>
                <Card.Title className="py-2">FoodMart - Team Works</Card.Title>
                <Card.Text className="d-flex flex-wrap gap-2 py-2">
                  <span className="border border-secondary px-2 rounded-pill">
                    NextJs
                  </span>
                  <span className="border border-secondary px-2 rounded-pill">
                    Tailwind
                  </span>
                  <span className="border border-secondary px-2 rounded-pill">
                    Firebase
                  </span>
                  <span className="border border-secondary px-2 rounded-pill">
                    Redux
                  </span>
                  <span className="border border-secondary px-2 rounded-pill">
                    Jira
                  </span>
                  <span className="border border-secondary px-2 rounded-pill">
                    Mongo DB
                  </span>
                  <span className="border border-secondary px-2 rounded-pill">
                    NODE JS
                  </span>
                  <span className="border border-secondary px-2 rounded-pill">
                    Stripe
                  </span>
                </Card.Text>

                <div className="d-flex justify-content-center gap-2">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://food-mart-web.vercel.app/"
                    className="cardButton rounded-pill"
                  >
                    <i className="fas fa-eye"></i> Live Link
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Rx-devs/FoodMart-client-side/tree/development"
                    className="cardButton rounded-pill"
                  >
                    Code Link
                  </a>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div id="cycleshop" className="col-lg-4 col-md-4 col-12 ">
            <Card className="cardbgColor text-center">
            <div className="window">
                <img loading="lazy" src="https://i.ibb.co/sH2sK7k/screencapture-cycle-shop-62d0c-web-app-home-2021-11-14-01-46-59.png" alt="" />
             </div>
              <Card.Body>
                <Card.Title className="py-2">Cycle Shop</Card.Title>
                <Card.Text className="d-flex flex-wrap gap-2 py-2">
                  <span className="border border-secondary px-2 rounded-pill">
                    HTML5
                  </span>
                  <span className="border border-secondary px-2 rounded-pill">
                    CSS3
                  </span>
                  <span className="border border-secondary px-2 rounded-pill">
                    TAILWIND
                  </span>
                  <span className="border border-secondary px-2 rounded-pill">
                    REACT
                  </span>
                  <span className="border border-secondary px-2 rounded-pill">
                    FIREBASE
                  </span>
                  <span className="border border-secondary px-2 rounded-pill">
                    MONGODB
                  </span>
                  <span className="border border-secondary px-2 rounded-pill">
                    NODE JS
                  </span>
                </Card.Text>

                <div className="d-flex justify-content-center gap-2">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://cycle-shop-62d0c.web.app/home"
                    className="cardButton rounded-pill"
                  >
                    <i className="fas fa-eye"></i> Live Link
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Anik-nath/CYCLE-SHOP"
                    className="cardButton rounded-pill"
                  >
                    Code Link
                  </a>
                </div>
              </Card.Body>
            </Card>
          </div>
          
        </div>
        <div className="text-center mt-5">
          <Link to="/projects">
            <button className="btn btn-outline-success rounded-pill px-4">
              See All Works
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
