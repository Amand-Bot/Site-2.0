import React, { useState} from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router,Routes,Route, Link} from "react-router-dom";
import App from './App'

//Components & Pages
import NavMenu from './components/NavMenu';
import Portal from './pages/Portal';
import Cadastro from './pages/Cadastro';
import Secretaria from './pages/Secretaria';

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';



const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <Router>
    <Routes>
      <Route path="/" exact element={<App />} />
      <Route path="/Portal" element={<Portal />} />
      <Route path="/Cadastro" element={<Cadastro />} />
      <Route path="/Secretaria" element={<Secretaria />} />
    </Routes>
  </Router>
);
