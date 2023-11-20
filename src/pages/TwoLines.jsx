import React from "react";

const TwoLines = () => {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
        <div className="col-sm-12 col-md-12 col-lg-10">
          <div className="other">
            <div className="row ">
              <div className="col-sm-12 col-md-12 col-lg-6">
                <img src={SVG1} alt="" />
              </div>

              <div className="col-sm-12 col-md-12 col-lg-6">
                <h4>
                  Leading healthcare <br /> providers
                </h4>
                <p>
                  Trafalgar provides progressive, and affordable <br />{" "}
                  healthcare, accessible on mobile and online for <br />{" "}
                  everyone. To us, it’s not just work. We take pride <br /> in
                  the solutions we deliver
                </p>
                <button>Learn more</button>
              </div>
            </div>
          </div>

          <div className="other4">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-6 mt-5">
                <h4>Download our mobile apps</h4>
                <p>
                  Our dedicated patient engagement app and <br /> web portal
                  allow you to access information <br /> instantaneously (no
                  tedeous form, long calls, <br />
                  or administrative hassle) and securely
                </p>
                <button className="Download">Download</button>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-6">
                <img src={SVG2} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
      </div>
    </React.Fragment>
  );
};

export default TwoLines;
