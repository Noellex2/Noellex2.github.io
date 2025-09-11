import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './com/ScrollToTop'; // 👉 import เข้ามา

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ScrollToTop />   {/* 👉 ใช้ตรงนี้ */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
