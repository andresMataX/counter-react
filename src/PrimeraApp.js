// import React, { Fragment } from 'react';
import React from 'react';
import PropTypes from 'prop-types';

// FC
const PrimeraApp = ({ saludo, subtitulo }) => {

    // const saludo = {
    //     nombre: 'Andrés',
    //     edad: 20
    // };
    // console.log(props);
    // const saludo = 'Hola mundo';

    // Usar Fragment es sustituído por no poner nada

    return (
        <>
            {/* <pre> {JSON.stringify(saludo, null, 3)} </pre> */}
            <h1>{saludo}</h1>
            <p>{subtitulo}</p>
        </>
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}

export default PrimeraApp;