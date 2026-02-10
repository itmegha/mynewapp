import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import App1 from './App1';
import Login from './Login';
import Card from './Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import AllUser from './UserMan/AllUser';
import Appe from './Weather/Appe';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
       <App />
       <App1 />
       <Login />
       <Card />
       <AllUser />
       <Appe />
    </>
  
);


reportWebVitals();
