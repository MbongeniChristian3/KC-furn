import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import HomePage from './homepage';
import Navbar from './Navbar';
import Footer from './Footer';
import Chatbot from './components/Chatbot'; 

// Import the new PrivacyPolicy component
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  return (
    <Router>
      <>
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route
            path="/original"
            element={
              <div className="App">
                <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <p>
                    Edit <code>src/App.js</code> and save to reload.
                  </p>
                  <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Mbongeni
                  </a>
                </header>
              </div>
            }
          />

          {/* New route for Privacy Policy */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>

        <Footer />
        <Chatbot />
      </>
    </Router>
  );
}

export default App;

