import React from 'react'
import { register } from 'swiper/element/bundle';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import MostReadingBooks from './component/MostReadingBooks';
// register Swiper custom elements
register();

function App() {
  return (
    <>
        <Navbar/>
        <Hero/>
        <MostReadingBooks/>
    </>
  )
}

export default App