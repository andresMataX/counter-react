import { getSaludo } from "../../base/02-template-string";

describe('Pruebas en 02-template-string.js', () => {
    test('prueba en el método getSaludo', () => {
        const nombre = 'Andrés';

        const saludo = getSaludo(nombre);
        expect(saludo).toBe('Hola ' + nombre);
    });

    // getSaludo debe de retornar Hola Carlos! si no hay argumento en el nombre
    test('getSaludo debe de retornar Hola Carlos! si no hay argumento en el nombre', () => {
        const saludo = getSaludo();
        expect(saludo).toBe('Hola Carlos!');
    });
})