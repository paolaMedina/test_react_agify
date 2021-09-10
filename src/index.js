import React from 'react';
import reactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

const divRoot = document.querySelector('#root');

reactDom.render(<App />, divRoot);
