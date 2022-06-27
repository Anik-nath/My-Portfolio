import React from "react";

const Footer = () => {
  const currYear = new Date().getFullYear();
  return (
    <div
      id="footer"
      className="bg-dark border-0 border-end-0 border-start-0 border-bottom-0 text-white-50 pt-3"
    >
      <div className="py-3 text-center text-muted">
        <div className="container d-flex justify-content-center">
          <div id="social" className="d-flex gap-4">
            <a
              className="text-white-50"
              href="https://www.facebook.com/aaroon.fince/"
            >
              <i className="fab fa-facebook h4 facebook"></i>
            </a>
            <a className="text-white-50" href="https://twitter.com/aniknathdev">
              <i className="fab fa-twitter h4 twitter"></i>
            </a>
            <a
              className="text-white-50"
              href="https://www.linkedin.com/in/anik-deb-nath-26aa22190/"
            >
              <i className="fab fa-linkedin h4 linkedin"></i>
            </a>
            <a className="text-white-50" href="https://github.com/Anik-nath">
              <i className="fab fa-github h4 github"></i>
            </a>
            <a className="text-white-50" href="#!">
              <i className="fab fa-instagram h4 instagram"></i>
            </a>
          </div>
        </div>
        <small>
          &copy; {currYear} All rights reserved -{" "}
          <span className="text-light">Anik Nath</span> theme.
        </small>
      </div>
    </div>
  );
};

export default Footer;
