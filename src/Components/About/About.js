import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../images/demo3.jpg'
const About = () => {
    return (
        <div className="bg-dark text-white py-5">
            <div className="container mt-5">
               <div className="row">
                   <div className="col-12">
                   <h2 className="position-relative pb-5 text-uppercase">About Me
                    <span
                    style={{color:"transparent",WebkitTextStroke: "1px #ffffff20",fontSize:"56px"}}
                    className="position-absolute start-0 bottom-50 mb-2 text-uppercase">Introduction</span>
                </h2>
                </div>
               </div>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                        <img className="w-100" src={image} alt="" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-12  mt-5 mt-md-0 mt-lg-0">
                        <div className="mb-5">
                        <h2 className="mb-0 text-uppercase">Anik Deb nath</h2>
                        <h6 className="text-white-50">Creative React Developer</h6>
                        </div>
                        <div style={{textAlign:'justify'}} className="text-white-50 lead">
                        <p>My name is Anik Deb nath. I am a Web Developer, and I'm very passionate and dedicated to my work.</p>
                        <p>I have vast knowledge in html, css, Javascript , React (javascript framewok), Tailwind , Material Ui, Firebase and so on. The work I provide is of highest quality, fully responsive, and tested in a wide range of devices.</p>
                        </div>
                        <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1kOPgnOLxQxqyPunroVYcyDVbMKVKLmvu/view" className="btn btn-primary mt-3 rounded-pill">Download Resume</a>
                        <Link to="/about">
                            <button className="btn btn-primary mt-3 rounded-pill ms-3">Read More</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;