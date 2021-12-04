import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import Aos from 'aos';

const Showcase = (props) => {
    const {name,img1,point1,live,codelink,point2,point3,point4,point5} = props.project;

    useEffect(()=>{
      Aos.init({duration:1000})
  },[]);

    return (
       <div className="col-lg-4 g-5 col-md-6 col-12">
            <Card data-aos="flip-left" className="bg-dark projectShadow">
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
                    className="btn btn-outline-secondary rounded-pill"
                  >
                    Live Link
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={codelink}
                    className="btn btn-outline-secondary rounded-pill"
                  >
                    Code Link
                  </a>
                  <a href="#!" className="btn btn-outline-secondary rounded-pill">
                    Details
                  </a>
                </div>
              </Card.Body>
            </Card>
       </div>
    );
};

export default Showcase;
