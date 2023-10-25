// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './NavbarStyles.css';
// import Navigation from './components/Navigation';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import CustomNavigationBar from './components/NavigationBar';
import './index.css';



const isDevelopment = process.env.NODE_ENV === 'development';

{/* */}

function App() {
  return (
      <Router basename={isDevelopment ? "/" : "/portfolio2"}>
        <div className="App">
            <CustomNavigationBar /> 

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
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
//       <Projects />
//   </div>
// );
// }


// export default ColorSchemesExample;
export default App;

