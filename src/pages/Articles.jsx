import React from 'react'
import './style.css'
import { BloodTest, Micro, Mask, BlackRect } from '../assets'

const Articles = () => {
  return (
    <React.Fragment>
        <h2 className="text-center">Check out our latest article</h2>
        <img src={ BlackRect } alt="" className='text-center'/>

        <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
        <div className="col-sm-12 col-md-12 col-lg-10">
            <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-4">
            <img src= { BloodTest } alt="" />
            <h4>Disease detection, check 
up in the laboratory</h4>
<p>In this case, the role of the health laboratory is very important to do
a disease detection...</p>
<p>Read more</p>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-4"></div>
        <div className="col-sm-12 col-md-12 col-lg-4"></div>
            </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
            
        </div>
      
    </React.Fragment>
  )
}

export default Articles
