import React from 'react'
import Clients from '../clients/Clients'
import Hero from '../hero/Hero';
import Cases from '../cases/Cases'
import CaseFilter from '../case-filter/CaseFilter';

const Home = () => {
  return (
    <>
      <Hero/>
      <CaseFilter/>
      <Cases/>
      <Clients/>
   </>
  )
}

export default Home