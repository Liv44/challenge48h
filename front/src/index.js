import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Home from './pages/Home.js';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AddProduct from './pages/AddProduct.js';
import Bag from './pages/Bag.js';
import Admin from './pages/Admin';
import { Commande } from './pages/Commandes.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<Login />} path="/login" />
        <Route element={<Signup />} path='/signup' />
        <Route element={<Bag />} path='/bag' />
        <Route element={<Admin />} path="/admin" />
        <Route element={<Commande />} path="/commande" />
        <Route element={<AddProduct />} path="/addproduct" />
        <Route element={<Admin />} path="/admin" />
      </Routes>
    </BrowserRouter>

  </React.StrictMode >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
