import React from 'react';
const { render } = require("@testing-library/react");
import PrimeraApp from "../PrimeraApp";

describe('Pruebas en <PrimeraApp />', () => {
    test('debe de mostrar el mensaje: "Hola, Soy Goku', () => {
        const saludo = 'Hola, Soy Goku';
        // Función que recibe un componente que queramos renderizar
        const wrapper = render(<PrimeraApp saludo={saludo} />)
    });
});