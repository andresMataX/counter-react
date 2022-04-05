import './index.css';
import React from "react";
import ReactDOM from "react-dom";
// import PrimeraApp from "./PrimeraApp";
import CounterApp from './CounterApp';

const divRoot = document.querySelector('#root');

ReactDOM.render( < CounterApp value = { 10 }
        />, divRoot);