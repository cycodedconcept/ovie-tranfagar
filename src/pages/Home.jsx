import React from "react";
import HeroImg from "../assets/trafalgar-illustration sec02 1.png";
import Cardimage from "../assets/Frame.png";
import Jarimage from "../assets/Frame 1.png";
import Consultimage from "../assets/Frame 2.png";
import Checkbookimage from "../assets/Frame 3.png";
import Emergeimage from "../assets/Frame 4.png";
import Trackingimage from "../assets/Frame 5.png";
import Bloodtest from "../assets/Blood test.png";
import { Link } from 'gatsby';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Home = () => {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
        <div className="col-sm-12 col-md-12 col-lg-10">
          <div className="row coll">
            <div className="col-sm-12 col-md-12 col-lg-6">
              <h4 id="head1">
                Virtual healthcare <br /> for you
              </h4>
              <p>
                Trafalgar provides progressive, and affordable <br />{" "}
                healthcare, accessible on mobile and online <br /> for everyone
              </p>
              <button id="consult">Consult today</button>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6">
              <img src={HeroImg} alt="" />
            </div>
          </div>

          <div className="top3">
            <h5>Our Services</h5>
            <p>
              We provide to you the best choiches for you. Adjust it to your
              health needs and make sure your undergo treatment <br /> with our
              highly qualified doctors you can consult with us which type of
              service is suitable for your health
            </p>
          </div>

          <div className="top4 " style={{ marginTop: "3rem" }}>
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-4">
                {/* 1st box */}
                <div className="box-1">
                  <img
                    src={Cardimage}
                    alt=""
                    className="w-25"
                    style={{ marginBottom: "30px" }}
                  />
                  <h5>Search doctor</h5>
                  <p>
                    Choose your doctor from thousands <br /> of specialist,
                    general, and trusted <br /> hospitals
                  </p>
                </div>
              </div>

              <div className="col-sm-12 col-md-12 col-lg-4">
                {/* 2nd box */}
                <div className="box-1">
                  <img
                    src={Jarimage}
                    alt=""
                    className="w-25"
                    style={{ marginBottom: "30px" }}
                  />
                  <h5>Online pharmacy</h5>
                  <p>
                    Buy your medicines with our <br /> mobile application with a
                    simple <br /> delivery system
                  </p>
                </div>
              </div>

              <div className="col-sm-12 col-md-12 col-lg-4">
                {/* 3rd box */}
                <div className="box-1">
                  <img
                    src={Consultimage}
                    alt=""
                    className="w-25"
                    style={{ marginBottom: "30px" }}
                  />
                  <h5>Search doctor</h5>
                  <p>
                    Free consultation with our trusted <br /> doctors and get
                    the best <br /> recomendations
                  </p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-4">
                {/* 4th box */}
                <div className="box-1">
                  <img
                    src={Checkbookimage}
                    alt=""
                    className="w-25"
                    style={{ marginBottom: "30px" }}
                  />
                  <h5>Search doctor</h5>
                  <p>
                    Free consultation with our trusted <br /> doctors and get
                    the best <br /> recomendations
                  </p>
                </div>
              </div>

              {/* 5th box */}
              <div className="col-sm-12 col-md-12 col-lg-4">
                <div className="box-1">
                  <img
                    src={Emergeimage}
                    alt=""
                    className="w-25"
                    style={{ marginBottom: "30px" }}
                  />
                  <h5>Search doctor</h5>
                  <p>
                    You can get 24/7 urgent care for <br /> yourself or your
                    children and your <br /> lovely family
                  </p>
                </div>
              </div>

              {/* 6th box */}
              <div className="col-sm-12 col-md-12 col-lg-4">
                <div className="box-1">
                  <img
                    src={Trackingimage}
                    alt=""
                    className="w-25"
                    style={{ marginBottom: "30px" }}
                  />
                  <h5>Search doctor</h5>
                  <p>
                    Track and save your medical history <br /> and health data{" "}
                  </p>
                </div>
              </div>
            </div>

            <button className="their">Learn more</button>
          </div>

          <div className="other">
            <div className="row ">
              <div className="col-sm-12 col-md-12 col-lg-6">
                <img src={Travimage} alt="" />
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
                <img src={Travimage2} alt="" />
              </div>
            </div>
          </div>

          <div className="big mb-5 py-5">
            <Carousel
              showThumbs={false}
              autoPlay
              infiniteLoop
              interval={5000}
              showArrows={false}
              showStatus={false}
            >
              <div className="py-5">
                <h4>What our customer are saying</h4>
                <div className="check">
                  <div className="main">
                    <div className="man-image">
                      <div className="man">
                        <img
                          src={Maskimage}
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
                        <img src={Pump} alt="" style={{ width: "100px" }} />
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
                        <img src={Messi} alt="" style={{ width: "100px" }} />
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

export default Home;

// import React, { useState } from 'react'

// const Home = () => {
//     const [count, setCount] = useState(0);
//     const increment = () => {
//         setCount(count + 1)
//     }

//     const reset =() =>{
//       setCount(0);
//     };
//     const decrement = () => {
//         // setCount (count - e 1)
//         (count !== 0) ? setCount(count - 1) : setCount(0)
//     }
//     const [ color, setColor] = useState("Blue")
//     const colorset = () => {
//       setColor("Green")
//     }

//   return (
//     <div>
//       <h1>This is the Home page</h1>
//       <br/>
//       <h5>{count}</h5>
//       <p>I love {color}</p>
//       <button onClick={reset}>Reset</button>
//       <button onClick={colorset}>Color</button>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>decrement</button>
//     </div>
//   )
// }

// export default Home
