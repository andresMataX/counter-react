import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en funciones de Heroes', () => {
    test('debe de retornar un Héror por ID', () => {
        const id = 3;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find(h => h.id === id);

        expect(heroe).toEqual(heroeData);
    });

    test('debe de retornar undefined si Héroe no existe', () => {
        const id = 10;
        const heroe = getHeroeById(id);

        expect(heroe).toBe(undefined);
    });

    test('debe de retornar un arreglo con los héroes de DC', () => {
        const owner = 'DC';
        const arrDCTest = getHeroesByOwner(owner);

        const arrDC = heroes.filter(h => h.owner === owner);

        expect(arrDCTest).toEqual(arrDC);
    });

    test('debe de retornar un arreglo con los héroes de Marve', () => {
        const owner = 'Marvel';
        const arrMarvelTest = getHeroesByOwner(owner).length;

        const arrMarvel = heroes.filter(h => h.owner === owner).length

        expect(arrMarvel).toBe(arrMarvelTest);
    });
});