import React from "react";
import { Form ,Button} from "react-bootstrap";

const Contact = () => {
  return (
    <div className="bg-dark text-white py-5">
      <div className="container my-5">
        <div className="row">
          <div className="col-12">
            <h2 className="position-relative pb-5 text-uppercase">
              Get in Touch
              <span
                style={{
                  color: "transparent",
                  webkitTextStroke: "1px #ffffff20",
                  fontSize: "56px",
                }}
                className="position-absolute start-0 bottom-50 mb-2 text-uppercase"
              >
                Contact Me
              </span>
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12">
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control className="bg-dark text-white" type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Write your message</Form.Label>
                <Form.Control className="bg-dark text-white" as="textarea" rows={3} />
              </Form.Group>
              <Button className="rounded-pill w-100 mt-3" variant="light" type="submit">
                    Send Me
                </Button>
            </Form>
          </div>
          <div className="col-lg-6 col-md-6 col-12 my-5 my-lg-0 my-md-0">
          <iframe style={{width:"100%",height:"350px",border:"0"}} title="mymap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118103.46961027698!2d91.74982735001818!3d22.325919306644526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd8a64095dfd3%3A0x5015cc5bcb6905d9!2sChattogram!5e0!3m2!1sen!2sbd!4v1638202942985!5m2!1sen!2sbd" allowfullscreen="" loading="lazy"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
