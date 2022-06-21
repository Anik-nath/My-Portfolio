import React from 'react';

const Footer = () => {
    const currYear = new Date().getFullYear();
    return (
        <div id="footer" className="bg-dark text-white-50 pt-3">
            <div className="container">
                <div className="row border-bottom border-secondary py-5">
                    <div className="col-lg-3 col-12">
                        <h5 className="pb-lg-2 text-white fw-bold">Anik Nath</h5>
                        <small>Portfolio Website</small><br />
                        <small className='pe-5'>For Developing Purpose. All Works are not done yet.</small>
                    </div>
                    <div className="col-lg-3 col-12 my-3 my-md-0 my-lg-0 pt-lg-0 pt-3">
                        <h5 className="pb-lg-2 text-white fw-bold">Address</h5>
                        <small><i className='fa fa-map-marker-alt pe-2'></i>  Chittagong, Bangldesh</small>
                    </div>
                    <div id="contact" className="col-lg-3 col-12 pt-lg-0 pt-3">
                        <h5 className="pb-lg-2 text-white fw-bold">Contact</h5>
                        <small><i className='fas fa-envelope pe-2'></i> anikdevnath03112000@gmail.com</small><br />
                        <small><i className='fas fa-phone-alt pe-2'></i> +8801875-738434</small><br />
                        {/* <small><i className='fa fa-map-marker-alt pe-2'></i> Chittagong,Bangldesh</small> */}
                    </div>
                    <div className="col-lg-3 col-12  mt-3 mt-md-0 mt-lg-0 pt-lg-0 pt-3">
                    <h5 className="pb-lg-2 text-white fw-bold">Social</h5>
                    <div id="social" className="d-flex gap-4">
                        <a className='text-white-50' href="https://www.facebook.com/aaroon.fince/"><i className="fab fa-facebook h4"></i></a>
                        <a className='text-white-50' href="https://twitter.com/aniknathdev"><i className="fab fa-twitter h4"></i></a>
                       <a className='text-white-50' href="https://github.com/Anik-nath"><i className="fab fa-github h4"></i></a>
                        <a className='text-white-50' href="https://www.linkedin.com/in/anik-deb-nath-26aa22190/"><i className="fab fa-linkedin h4"></i></a>
                       <a className='text-white-50' href="https://stackoverflow.com/users/16790104/anik-deb-nath"><i className="fab fa-stack-overflow h4"></i></a>
                    </div>
                    </div>
                </div>
            </div>
            <div className="py-3 text-center text-muted"> 
                <small>&copy; {currYear} All rights reserved - <span className='text-light'>Anik Nath</span> themes.</small>
            </div>
        </div>
    );
};

export default Footer;