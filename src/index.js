import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import{ AppProvider } from './context/ShipsContext';
import CardList from "./components/CardList/CardList"
import Home from './Pages/Home/Home';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='starships' element={<CardList />} />
      </Routes>
    </BrowserRouter>
  </AppProvider>


);