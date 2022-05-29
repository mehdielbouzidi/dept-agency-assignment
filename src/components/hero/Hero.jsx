import React from 'react'
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero__inner container flex'>
        <h1 className='hero__title'>WORK</h1>
        <Link to="/cases" className='button-primary'>VIEW CASE</Link>
      </div>
    </div>
  )
}

export default Hero