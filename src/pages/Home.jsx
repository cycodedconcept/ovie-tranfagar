import React from "react";
import {
  HeroImg,
} from "../assets";



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
