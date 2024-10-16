// src/App.jsx
import React from 'react';
import Header from './components/HeaderComponent';
import Home from './components/HomeSection'
import Services from './components/ServicesSection'
import About from './components/AboutSection'
import Contact from './components/ContactSection'
import Footer from './components/FooterSection'


const App = () => {
    return (
        <div className='font-playfair bg-gray-100'>
            <Header />
            <Home />
            <Services />                        
            <About />
            <Contact />
            <Footer />                                    
        </div>
    );
};

export default App;