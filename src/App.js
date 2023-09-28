import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Inventory from './components/Inventory';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from './components/Detail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
         <Route path="/" element={<Login />} />
         <Route path="/inventory" element={<Inventory />} />
         <Route path="/inventory/:partId" element={<Detail />} />
       </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
