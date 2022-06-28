import React, { useEffect } from "react";
import Aos from 'aos';

const Blogs = () => {
  useEffect(()=>{
    Aos.init({duration:1000});
  },[]);

  return (
    <div className="myBgColor text-white py-5">
      <div className="container pt-5 d-flex flex-column justify-content-center align-items-center" style={{height:"100vh"}}>
        <div>
            <img loading="lazy" className="img-fluid" src="https://i.ibb.co/JCZwmww/comingsoon.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
