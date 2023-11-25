import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <React.Fragment>
      <section class="">
        {/* !-- Footer -- */}
        <footer class="footer bg-body-tertiary text-center text-md-start">
          {/* !-- Grid container -- */}
          <div class="container p-4">
            {/* <!--Grid row--> */}
            <div class="row">
              {/* <!--Grid column--> */}
              <div class="col-lg-6 col-md-12 mb-3 mb-md-0">
                {/* <img src= { WhiteLogo } alt="" /> */}
                <div className="logo mb-0">
                  <div class="circle">
                    <h2 className="text">T</h2>
                  </div>
                  <h2 className="dewhite">Trafalgar</h2>
                </div>

                <div className="tar-p">
                  <p className="jcole">
                    Trafalgar provides progressive, and affordable healthcare,
                    accessible on mobile and online for everyone
                  </p>
                  <p>©Trafalgar PTY LTD 2020. All rights reserved</p>
                </div>
              </div>
              {/* <!--Grid column--> */}

              {/* <!--Grid column--> */}
              <div class="col-lg-2 col-md-4 mb-3 mt-md-5 text-center" style={{fontSize: "20px"}}>
                <h5 class="text-uppercase">Company</h5>

                <ul class="list-unstyled mb-2">
                  <li>
                    <a href="#!" className="link">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="link">
                      Testimonials
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="link">
                      Find a doctor
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="link">
                      Apps
                    </a>
                  </li>
                </ul>
              </div>
              {/* <!--Grid column--> */}

              {/* <!--Grid column--> */}
              <div class="col-lg-2 col-md-4 mb-3 mt-md-5 text-center" style={{fontSize: "20px"}}>
                <h5 class="text-uppercase">Regions</h5>

                <ul class="list-unstyled mb-2">
                  <li>
                    <a href="#!" className="link">
                      Indonesia
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="link">
                      Singapore
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="link">
                      Hongkong
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="link">
                      Canada
                    </a>
                  </li>
                </ul>
              </div>
              {/* <!--Grid column--> */}

              {/* <!--Grid column--> */}
              <div class="col-lg-2 col-md-4 mb-3 mt-md-5 text-center" style={{fontSize: "20px"}}>
                <h5 class="text-uppercase mb-2">Help</h5>

                <ul class="list-unstyled">
                  <li>
                    <a href="#!" className="link">
                      Help center
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="link">
                      Contact support
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="link">
                      Instructions
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="link">
                      How it works
                    </a>
                  </li>
                </ul>
              </div>
              {/* <!--Grid column--> */}
            </div>
            {/* <!--Grid row--> */}
          </div>
          {/* <!-- Grid container --> */}
        </footer>
        {/* <!-- Footer --> */}
      </section>
    </React.Fragment>
  );
};

export default Footer;
