import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { TodoPage } from './pages/TodoPage';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/menu' element={<Menu />}></Route>
        <Route path='/todopage' element={<TodoPage />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
