import React from "react";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BloodTest, Micro, Mask, BlackRect } from "../assets";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Articles = () => {
  return (
    <React.Fragment>
      <h2 className="text-center">Check out our latest article</h2>
      <center>
        <img src={BlackRect} alt="" />
      </center>

      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
        <div className="col-sm-12 col-md-12 col-lg-10">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-4">
             <div className="card">
             <img src={BloodTest} alt="" className="art-side" />
              <div className="card-body">
              <h4>Disease detection, check up in the laboratory</h4>
              <p>
                In this case, the role of the health laboratory is very
                important to do a disease detection...
              </p>
              <p>
                Read more <FontAwesomeIcon icon={faArrowRight} />{" "}
              </p>
              </div>
             </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4">
              <div className="card">
              <img src={Micro} alt="" className="art-side" />
                <div className="card-body">
              <h4>Herbal medicines that are safe for consumption</h4>
              <p>
                Herbal medicine is very widely used at this time because of its
                very good for your health...
              </p>
              <p>
                Read more <FontAwesomeIcon icon={faArrowRight} />
              </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4">
              <div className="card">
              <img src={Mask} alt="" className="art-side" />
                <div className="card-body">
                
              <h4>Natural care for healthy facial skin</h4>
              <p>
                A healthy lifestyle should start from now and also for your skin
                health. There are some...
              </p>
              <p>
                Read more <FontAwesomeIcon icon={faArrowRight} />
              </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
      </div>
    </React.Fragment>
  );
};

export default Articles;
