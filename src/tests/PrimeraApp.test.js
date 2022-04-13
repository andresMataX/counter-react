// import React from 'react';
// const { render } = require("@testing-library/react");
// import '@testing-library/jest-dom/extend-expect'
import PrimeraApp from "../PrimeraApp";
import { shallow } from 'enzyme';

describe('Pruebas en <PrimeraApp />', () => {
    // test('debe de mostrar el mensaje: "Hola, Soy Goku', () => {
    //     const saludo = 'Hola, Soy Goku';
    //     // Función que recibe un componente que queramos renderizar
    //     const { getByText } = render(<PrimeraApp saludo={saludo} />);
    //     expect(getByText(saludo)).toBeInTheDocument();
    // });

    test('debe de mostrar <PrimeraApp /> correctamente', () => {
        const saludo = 'Hola, Soy Goku';
        const wrapper = shallow(<PrimeraApp saludo={saludo} />);

        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar el subtítulo enviado por props', () => {
        const saludo = 'Hola, Soy Goku';
        const subtitulo = 'Soy un subtítulo';

        const wrapper = shallow(<PrimeraApp saludo={saludo} subtitulo={subtitulo
        } />);

        const textoParrafo = wrapper.find('p').text();

        expect(textoParrafo).toBe(subtitulo);
    });

});