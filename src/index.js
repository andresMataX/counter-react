// Antes React 18
/*import './index.css';
import React from "react";
import ReactDOM from "react-dom";
import PrimeraApp from "./PrimeraApp";
// import CounterApp from './CounterApp';

const divRoot = document.querySelector('#root');

ReactDOM.render(<PrimeraApp value="Hola, Soy Goku" />, divRoot);*/


// React 18
import './index.css';
import React from "react";
import { createRoot } from "react-dom/client";
// import PrimeraApp from "./PrimeraApp";
import CounterApp from './CounterApp';

const divRoot = document.querySelector('#root');
const root = createRoot(divRoot);

// root.render(<PrimeraApp saludo='Hola, Soy Goku' />);

root.render(<CounterApp value={10} />);