import React, { useEffect } from "react";
import Aos from 'aos';

const Blogs = () => {

  useEffect(()=>{
    Aos.init({duration:1000});
  },[]);

  return (
    <div className="myBgColor text-white py-5">
      <div className="container pt-5">
        <div className="row">
          <div className="col-12 text-center">
            <h3> <span className="text-warning"></span></h3>
            <img loading="lazy" className="w-100" src="https://i.ibb.co/jrsD62T/istockphoto-1081589832-170667a-removebg-preview.png" alt="" />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Blogs;
