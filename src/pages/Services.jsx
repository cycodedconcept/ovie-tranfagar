import React from "react";
import "./style.scss";
import {
  Search,
  Jar,
  Record,
  Record2,
  First,
  Record3,
  BlackRect,
} from "../assets";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";
// import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
export const Services = () => {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        scale: 1,
        transition: {
          type: "spring.=",
          duration: 2,
          bounce: 0.3,
        },
      });
    } else {
      animation.start({
        scale: 0.8,
        transition: {
          duration: 2,
        },
      });
    }
  }, [inView, animation]);
  // useEffect(() => {
  //   if (inView2) {
  //     animation2.start({
  //       scale: 1,
  //       transition: {
  //         type: "spring.=",
  //         duration: 2,
  //         bounce: 0.3,
  //       },
  //     });
  //   } else {
  //     animation2.start({
  //       scale: 0.8,
  //       transition: {
  //         duration: 2,
  //       },
  //     });
  //   }
  // }, [inView2, animation2]);
  // useEffect(() => {
  //   if (inView3) {
  //     animation3.start({
  //       scale: 1,
  //       transition: {
  //         type: "spring",
  //         duration: 2,
  //         bounce: 0.3,
  //       },
  //     });
  //   } else {
  //     animation3.start({
  //       scale: 0.8,
  //       transition: {
  //         duration: 2,
  //       },
  //     });
  //   }
  // }, [inView3, animation3]);
  return (
    <React.Fragment>
      <div className="maservice-lg">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-1"></div>
          <div className="col-sm-12 col-md-12 col-lg-10">
            <div className="top3">
              <h4>Our Services</h4>
              <center>
                <img src={BlackRect} alt="" className="" />
              </center>

              <p>
                We provide to you the best choiches for you. Adjust it to your
                health needs and make sure your undergo treatment <br /> with
                our highly qualified doctors you can consult with us which type
                of service is suitable for your health
              </p>
            </div>

            <div className="top4 " style={{ marginTop: "3rem" }}>
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-4">
                  {/* 1st box */}
                  <div className="box-1">
                    <motion.div
                      ref={ref}
                      animate={animation}
                      initial={{ scale: 0.8 }}
                    >
                      <img
                        src={Search}
                        alt=""
                        className="w-25"
                        style={{ marginBottom: "30px" }}
                      />
                    </motion.div>

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
                    <motion.div
                      ref={ref}
                      animate={animation}
                      initial={{ scale: 0.8 }}
                    >
                      <img
                        src={Jar}
                        alt=""
                        className="w-25"
                        style={{ marginBottom: "30px" }}
                      />
                    </motion.div>
                    <h5>Online pharmacy</h5>
                    <p>
                      Buy your medicines with our <br /> mobile application with
                      a simple <br /> delivery system
                    </p>
                  </div>
                </div>

                <div className="col-sm-12 col-md-12 col-lg-4">
                  {/* 3rd box */}
                  <div className="box-1">
                    <motion.div
                      ref={ref}
                      animate={animation}
                      initial={{ scale: 0.8 }}
                    >
                      <img
                        src={Record}
                        alt=""
                        className="w-25"
                        style={{ marginBottom: "30px" }}
                      />
                    </motion.div>
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
                    <motion.div
                      ref={ref}
                      animate={animation}
                      initial={{ scale: 0.8 }}
                    >
                      <img
                        src={Record2}
                        alt=""
                        className="w-25"
                        style={{ marginBottom: "30px" }}
                      />
                    </motion.div>
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
                    <motion.div
                      ref={ref}
                      animate={animation}
                      initial={{ scale: 0.8 }}
                    >
                      <img
                        src={First}
                        alt=""
                        className="w-25"
                        style={{ marginBottom: "30px" }}
                      />
                    </motion.div>
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
                    <motion.div
                      ref={ref}
                      animate={animation}
                      initial={{ scale: 0.8 }}
                    >
                      <img
                        src={Record3}
                        alt=""
                        className="w-25"
                        style={{ marginBottom: "30px" }}
                      />
                    </motion.div>
                    <h5>Search doctor</h5>
                    <p>
                      Track and save your medical history <br /> and health data{" "}
                    </p>
                  </div>
                </div>
              </div>

              <center><button className="their">Learn more</button></center>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-1"></div>
        </div>
      </div>

      
    </React.Fragment>
  );
};

export default Services;
