import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import buyer1 from "../../images/buyer-img-1.jpg";
import buyer2 from "../../images/buyer-img-2.jpg";
import buyer3 from "../../images/buyer-img-3.jpg";
import Rating from "react-rating";

const Review = () => {
  return (
    <div className="myBgColor text-white py-5">
      <div className="container pt-5">
        <div className="row">
          <div className="col-12">
            <h2 className="position-relative pb-5 my-title">
              What Buyers Says
              <span
                className="position-absolute start-0 bottom-50 mb-2 text-uppercase"
              >
                Reviews
              </span>
            </h2>
          </div>
        </div>
        <Row className="text-center">
          <Col lg={4} md={4} sm={12} xs={12} className="">
            <div className="mx-auto cardbgColor p-3">
              <div
                className="mx-auto mb-3"
                style={{ width: "80px", height: "80px" }}
              >
                <img loading="lazy" className="w-100 rounded-circle" src={buyer2} alt="" />
              </div>
              <div>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  efficitur ex sit amet massa scelerisque scelerisque.
                </Card.Text>
                <Card.Title>Hellen Miller</Card.Title>
                <Rating
                  className="text-warning p-2"
                  initialRating={5}
                  readonly
                  emptySymbol="far fa-star"
                  fullSymbol="fas fa-star"
                />
              </div>
            </div>
          </Col>
          <Col lg={4} md={4} sm={12} xs={12} className="my-5 my-lg-0 my-md-0">
            <div className="mx-auto cardbgColor p-3">
              <div
                className="mx-auto mb-3"
                style={{ width: "80px", height: "80px" }}
              >
                <img loading="lazy" className="w-100 rounded-circle" src={buyer3} alt="" />
              </div>
              <div>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  efficitur ex sit amet massa scelerisque scelerisque.
                </Card.Text>
                <Card.Title>Masum Billah</Card.Title>
                <Rating
                  className="text-warning p-2"
                  initialRating={5}
                  readonly
                  emptySymbol="far fa-star"
                  fullSymbol="fas fa-star"
                />
              </div>
            </div>
          </Col>
          <Col lg={4} md={4} sm={12} xs={12}>
            <div className="mx-auto cardbgColor p-3">
              <div
                className="mx-auto mb-3"
                style={{ width: "80px", height: "80px" }}
              >
                <img loading="lazy" className="w-100 rounded-circle" src={buyer1} alt="" />
              </div>
              <div>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  efficitur ex sit amet massa scelerisque scelerisque.
                </Card.Text>
                <Card.Title>Jhon Doe</Card.Title>
                <Rating
                  className="text-warning p-2"
                  initialRating={5}
                  readonly
                  emptySymbol="far fa-star"
                  fullSymbol="fas fa-star"
                />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Review;
