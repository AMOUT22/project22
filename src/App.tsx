import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import HomePage from './Home';
import Selection from './Selection';
import Proposition from './Proposition';
import Valeurs from './Valeurs';
import Footer from './Footer';
import BackToTopButton from './Backtop';
import AboutUs from './AboutUs';
import PropositionDetail from './PropositionDetail';
import ContactUs from './Contactus';
 

function App() {
  
  return (
    <div className="App">
       <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={
            <div className="animate-rotate-in">
              <HomePage />
            </div>
          }
        />
        <Route
          path="/proposition"
          element={
            <div className="animate-fade-scale">
              <Proposition />
            </div>
          }
        />
        <Route
          path="/aboutus"
          element={
            <div className="animate-bounce-in-top">
              <AboutUs />
            </div>
          }
        />
             <Route
          path="/detail"
          element={
            <div className="animate-fade-scale">
              <PropositionDetail />
            </div>
          }
        />
        <Route path="/contact" element={<ContactUs/>}/>
      </Routes>
      <BackToTopButton />
    </BrowserRouter>
      
      
      
          </div>
  );
}

export default App;
//  
//       <HomePage />
//       <Selection />
//       <Proposition />
//       <Valeurs />
//       <AboutUs />
//       <Footer />
//       <BackToTopButton />