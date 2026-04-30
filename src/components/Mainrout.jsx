import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Details from './DetailProject/Details'
import HeroSection from './Hero-section/HeroSection'

const Mainrout = () => {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<HeroSection/>}/>
        <Route path="/details/:id" element={<Details/>}/>
      </Routes>
    </div>
  )
}

export default Mainrout
