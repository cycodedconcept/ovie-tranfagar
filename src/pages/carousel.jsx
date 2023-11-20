import React from "react";
import "./style.css";
import { WhiteRect, Man } from "../assets";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const carousel = () => {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
        <div className="col-sm-12 col-md-12 col-lg-10">
          <div className="big mb-5 py-5">
            <Carousel
              showThumbs={false}
              autoPlay
              infiniteLoop
              interval={5000}
              showArrows={true}
              showStatus={false}
              dot={true}
            >
              <div className="py-5">
                <h4>What our customer are saying</h4>
                <div className="check">
                  <div className="main">
                    <div className="man-image">
                      <div className="man">
                        <img
                          src={WhiteRect}
                          alt=""
                          style={{ width: "100px" }}
                        />
                      </div>
                      <div className="man-text">
                        <h6>Edward Newgate</h6>
                        <p>Founder Circle</p>
                      </div>
                    </div>
                  </div>

                  <div className="man-info">
                    <p>
                      “Our dedicated patient engagement app and <br />
                      web portal allow you to access information <br />{" "}
                      instantaneously (no tedeous form, long calls, <br />
                      or administrative hassle) and securely”
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h4>What our customer are saying</h4>
                <div className="check">
                  <div className="main">
                    <div className="man-image">
                      <div className="man">
                        <img src={Man} alt="" style={{ width: "100px" }} />
                      </div>
                      <div className="man-text">
                        <h6>Gazzy Garcia</h6>
                        <p>Founder Circle</p>
                      </div>
                    </div>
                  </div>

                  <div className="man-info">
                    <p>
                      “Our dedicated patient engagement app and <br />
                      web portal allow you to access information <br />{" "}
                      instantaneously (no tedeous form, long calls, <br />
                      or administrative hassle) and securely”
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h4>What our customer are saying</h4>
                <div className="check">
                  <div className="main">
                    <div className="man-image">
                      <div className="man">
                        <img src={Man} alt="" style={{ width: "100px" }} />
                      </div>
                      <div className="man-text">
                        <h6>Lionel Messi</h6>
                        <p>Founder Circle</p>
                      </div>
                    </div>
                  </div>

                  <div className="man-info">
                    <p>
                      “Our dedicated patient engagement app and <br />
                      web portal allow you to access information <br />{" "}
                      instantaneously (no tedeous form, long calls, <br />
                      or administrative hassle) and securely”
                    </p>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
      </div>
    </React.Fragment>
  );
};

export default carousel;
