import React from 'react'
import Section1 from './MainPage/Section1'
import Section2 from './MainPage/Section2'
import Section3 from './MainPage/Section3'
import Section4 from './MainPage/Section4'
import Section5 from './MainPage/Section5'
import Section8 from './MainPage/Section8'
import ImageSlider from './MainPage/ImageSlider'
import Navbar from './MainPage/Navbar'
import Footer from './MainPage/Footer'

const HomePage = () => {
  return (
    <>
  <Navbar/>
<Section1/>
<ImageSlider/>
<Section2/>
<Section3/>
<Section4/>
<Section5/>
<Section8/>
<Footer/> 
    </>
  )
}

export default HomePage
