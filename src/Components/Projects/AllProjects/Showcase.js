import React, { useEffect, useState } from "react";
import { Card, Container, Modal } from "react-bootstrap";
import Aos from "aos";

const Showcase = (props) => {
  const {
    name,
    img1,
    img2,
    point1,
    live,
    codelink,
    point2,
    point3,
    point4,
    point5,
  } = props.project;
  const [show, setShow] = useState(false);
  const [fullscreen, setFullscreen] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = (breakpoint) => {
    setFullscreen(breakpoint);
    setShow(true);
  };

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="col-lg-4 g-5 col-md-6 col-12">
      <div data-aos="zoom-in" className="cardbgColor">
        <Card.Img variant="top" src={img1} />
        <Card.Body>
          <Card.Title className="text-white-50">{name}</Card.Title>
          <Card.Text className="d-flex flex-wrap gap-2 py-2">
            <div className="d-flex flex-column text-white-50">
              <li>{point1}</li>
              <li>{point2}</li>
              <li>{point3}</li>
              <li>{point4}</li>
              <li>{point5}</li>
            </div>
          </Card.Text>

          <div className="d-flex justify-content-center gap-2">
            <a
              target="_blank"
              rel="noreferrer"
              href={live}
              className="cardButton rounded-pill"
            >
              Live Link
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href={codelink}
              className="cardButton rounded-pill"
            >
              Code Link
            </a>

            <button onClick={handleShow} className="cardButton rounded-pill">
              Details
            </button>
            <Modal
              className="myBgColor"
              id="modal"
              show={show}
              fullscreen={fullscreen}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header
                className="bg-success text-light border-0"
                closeButton
              >
                <Container>
                  <Modal.Title>{name}</Modal.Title>
                </Container>
              </Modal.Header>
              <Modal.Body className="myBgColor text-light">
                <div className="container">
                  <div
                    style={{ textAlign: "justify" }}
                    className="row py-5 mx-lg-1"
                  >
                    <div className="col-lg-6 cardbgColor p-3">
                      <h4>Features</h4>
                      <ul className="pt-3">
                        <li>
                          Website ideas are unique like the Themeforest website
                          theme.
                        </li>
                        <li>
                          Implement email/ password (login/Register) based login
                          system. The registration form should have the name and
                          once a user is logged in, the user name and the logout
                          button should appear on the user menu in the dropdown
                          which will log out the user once clicked. Displaying
                          images on the header.
                        </li>
                        <li>
                          If a user is logged in, he/she will unlock the private
                          pages and inside that, a normal user without an
                          account system will go to the login page.
                        </li>
                        <li>
                          Use a database to store information. It could be the
                          MongoDB atlas database.
                        </li>
                        <li>
                          We Make the website responsive. We Make sure the site
                          looks different on desktop and mobile responsive.
                        </li>
                        <li>
                          Clean and organized Code. Organize components and add
                          comments when needed
                        </li>
                        <li>
                          We Make the footer a little more realistic Replace the
                          default react favicon and give an icon for our
                          website. Use icons whenever applicable and use fonts
                          (google fonts)
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-6 cardbgColor p-3">
                      <h4>Additional information:</h4>
                      <ul className="pt-3">
                        <li>
                          We can use a local image Make carousel we use SwiperJS
                          Package.
                        </li>
                        <li>
                          Use MaterialUI. And When needed we used mixed CSS. We
                          use react
                        </li>
                        <li>
                          hook form, basic MaterialUI form Used Firebase for
                        </li>
                        <li>
                          authentication We host our site on Firebase. We host a
                          server on Heroku.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="cardbgColor mb-3">
                    <Card.Img variant="top" src={img2} />
                  </div>
                </div>
               
              </Modal.Body>
            </Modal>
          </div>
        </Card.Body>
      </div>
    </div>
  );
};

export default Showcase;
