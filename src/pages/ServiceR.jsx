import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./style.scss";
import { Search, Jar, Record, Record2, First, Record3, BlackRect } from "../assets";

const ServiceR = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  
  return (
    <div>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <div>
        <div className="box-1">
           <img
                src={Search}
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
        <div>
        <div className="box-1">
          <img
              src={Jar}
              alt=""
              className="w-25"
              style={{ marginBottom: "30px" }}
            />
          <h5>Online pharmacy</h5>
          <p>
            Buy your medicines with our <br /> mobile application with
            a simple <br /> delivery system
          </p>
        </div>
        </div>
        <div>
        <div className="box-1">
          <img
              src={Record}
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
        <div>
        <div className="box-1">
           <img
              src={Record2}
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
      </Carousel>
    </div>
  )
}

export default ServiceR
