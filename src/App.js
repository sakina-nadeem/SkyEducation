import React from 'react'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Partner from './components/Partners';
import About from './components/About';
import Courses from './components/Courses';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Faqs from './components/Faqs';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Partner />
      <About />
      <Courses/>
      <Testimonials/>
      <Newsletter/>
      <Faqs/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App