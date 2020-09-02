import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './componentes/App';
import { BrowserRouter } from 'react-router-dom';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,    
    document.querySelector('#root')
);