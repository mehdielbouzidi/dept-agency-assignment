import Header from "../header/Header";
import React from 'react'
import Footer from "../footer/Footer";
import gif from '../../images/404.gif'
import { Link } from "react-router-dom";

const NotFoundPageContent = () => {
  return (
    <div className="page-not-found container ptb-5">
      <img src={gif} alt='Animation of a floating air balloon'/>
      <h2>Page not found</h2>
      <Link to="/" className='button-primary'>RETURN TO HOME</Link>
    </div>
  )
}

const NotFoundPage = () => {
  return (
    <>
    <Header/>
    <NotFoundPageContent />
    <Footer/>
    </>
  )
}

export default NotFoundPage