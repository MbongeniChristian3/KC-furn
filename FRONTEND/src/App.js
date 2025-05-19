import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import HomePage from './homepage';
import Footer from './Footer';
import Navbar from './Navbar'; // ✅ Import Navbar

function App() {
  return (
    <Router>
      <>
        {/* ✅ Sticky top navbar */}
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
        </Routes>

        {/* ✅ Footer appears below all pages */}
        <Footer />
      </>
    </Router>
  );
}

export default App;
