import React from 'react';

const Footer = () => {
    return (
        <div className="bg-dark text-white-50 pt-3">
            <div className="container">
                <div className="row border-top border-white-50 py-5">
                    <div className="col-lg-3 col-12">
                        <h4 className="pb-lg-2 ">Anik Nath</h4>
                        <h6>Portfolio Website</h6>
                    </div>
                    <div className="col-lg-3 col-12 my-3 my-md-0 my-lg-0">
                        <h4 className="pb-lg-2 ">Address</h4>
                        <h6>Chittagong,Bangldesh</h6>
                    </div>
                    <div className="col-lg-3 col-12">
                        <h4 className="pb-lg-2 ">Contact</h4>
                        <h6>anikdevnath03112000@gmail.com</h6>
                        <h6>+880 1875 000000</h6>
                    </div>
                    <div className="col-lg-3 col-12  mt-3 mt-md-0 mt-lg-0">
                    <h4 className="pb-lg-2 ">Social</h4>
                    <div className="d-flex gap-4">
                        <i className="fab fa-facebook h4"></i>
                        <i className="fab fa-github h4"></i>
                        <i className="fab fa-linkedin h4"></i>
                        <i className="fab fa-twitter h4"></i>
                    </div>
                    </div>
                </div>
            </div>
            <div className="bg-black py-3 text-center text-muted"> 
                <small>&copy; 2021 All rights reserved - <span className="text-warning">Anik Nath</span>.</small>
            </div>
        </div>
    );
};

export default Footer;