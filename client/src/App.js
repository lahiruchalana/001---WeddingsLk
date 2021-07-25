import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom'
import { BrowserRouter as Router } from "react-router-dom";
import { DataProvider } from './GlobalState'
import Headers from './components/headers/Headers'
import Header from './components/header/Header';
import MainPages from './components/mainpages/Pages'
import Home from './components/home/Home.js';
import Vendors from './components/vendor/Vendors';
import Login from './components/mainpages/auth/Login';

function App() {
  return (
    <DataProvider>
    <Router>

      <div className="App">
        <MainPages />
      </div>
    </Router>
  </DataProvider>
  );
}

export default App;
