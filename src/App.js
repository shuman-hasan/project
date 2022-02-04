import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Cover from './components/Cover';
import Service from './components/Service';
;


function App() {
  return (
    <div className="App">
     <Navbar />
     <Cover />
     <Service />
    </div>
  );
}

export default App;
