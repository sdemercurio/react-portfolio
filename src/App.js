import React from "react";
import Navbar from './components/Navbar';
import Web from './pages/Web';
import Home from './pages/Home';
import Contact from './pages/Contact';
import { HashRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
        <Route exact path="/"  component={Home} />
        <Route path="/web" component={Web} />
        <Route path="/contact" component={Contact} />
        </div>
      </div>
    </Router>
    </>
  );
}

export default App;
