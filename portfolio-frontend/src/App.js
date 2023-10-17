// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './NavbarStyles.css';
// import Navigation from './components/Navigation';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import CustomNavigationBar from './components/NavigationBar';
import './index.css';



{/* */}



function App() {
  return (
      <Router>
          <div className="App">
    <CustomNavigationBar /> 

              <Routes>
                <Route path="/home" element={<Home />} />
                  <Route path="/about" element={<AboutMe />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/contact" element={<Contact />} />
              </Routes>
          </div>
      </Router>
  );
}

// function App() {
// return (
//   <div>
//     <CustomNavigationBar /> 

//       <Home />
//       <AboutMe />
//       <Projects />
//       <Contact />
//   </div>
// );
// }


// export default ColorSchemesExample;
export default App;

