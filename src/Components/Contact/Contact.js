import  emailjs  from "emailjs-com";
import React from "react";
import { Form } from "react-bootstrap";

const Contact = () => {
    const send =(e)=>{
        e.preventDefault();
        emailjs.sendForm('service_2x8sllq','template_hcdf01i',e.target,'user_du5CvPTv8vj8LoZ6f00DX').then(res =>{
            console.log("successfully send message");
            alert("Thank You!");
        }).catch(err =>{
            console.log(err);
        })
    }
  return (
    <div className="myBgColor text-white py-5">
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12">
            <h2 className="position-relative pb-5 my-title">
              Get in Touch
              <span
                className="position-absolute start-0 bottom-50 mb-2 text-uppercase"
              >
                Contact Me
              </span>
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12">
            <Form onSubmit={send}>
            <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                
                <Form.Control className="cardbgColor border-0 rounded-pill text-white" type="fullname" name="fullname" placeholder="Your fullname" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
              
                <Form.Control className="cardbgColor border-0 rounded-pill text-white" type="email" name="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea2"
              >
              <Form.Control className="cardbgColor border-0 rounded-pill text-white" type="subject" name="subject" placeholder="Subject" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea3"
              >
                <Form.Control className="cardbgColor border-0 rounded text-white" as="textarea" name="message" rows={4} placeholder="Your Message"  />
              </Form.Group>
              <button className="myButtonNew rounded-pill w-100 mt-3 py-3" type="submit">
                    <span>Send Message</span>
                </button>
            </Form>
          </div>
          <div className="col-lg-6 col-md-6 col-12 my-5 my-lg-0 my-md-0">
          <iframe style={{width:"100%",height:"350px",border:"0"}} title="mymap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118103.46961027698!2d91.74982735001818!3d22.325919306644526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd8a64095dfd3%3A0x5015cc5bcb6905d9!2sChattogram!5e0!3m2!1sen!2sbd!4v1638202942985!5m2!1sen!2sbd" allowFullScreen="" loading="lazy"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

/* 
http://preview.themeforest.net/item/trydo-creative-agency-react-template/full_screen_preview/25457315?_ga=2.44263971.622514835.1610510661-933693064.1600738304&clickid=TN80is2XCxyIWE2wQIVNPydYUkDzbl3Rq3GW1E0&iradid=275988&iradtype=ONLINE_TRACKING_LINK&irgwc=1&irmptype=mediapartner&irpid=2305834&mp_value1=&utm_campaign=af_impact_radius_2305834&utm_medium=affiliate&utm_source=impact_radius

https://reactjsexample.com/22-best-react-portfolio-page-templates-in-2021/

https://cheaphostings.net/html/tf/nick-berg/nick-berg/index.html
*/