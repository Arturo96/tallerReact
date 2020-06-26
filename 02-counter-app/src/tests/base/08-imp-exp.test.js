import heroes from '../../data/heroes';
import '@testing-library/jest-dom';
const { getHeroeById, getHeroesByOwner } = require("../../base-pruebas/08-imp-exp");

describe('Pruebas en 08-imp-exp.js', () => {
    test('Debe de retornar un héroe', () => {
        const id = 1;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find(hero => hero.id === id);

        expect(heroe).toEqual(heroeData);
    })

    test('Debe de retornar undefined si el héroe no existe', () => {
        const id = -1;
        const heroe = getHeroeById(id);

        expect(heroe).toBe(undefined);
    })

    test('Debe de retornar un arreglo con los héroes de DC', () => {
        const owner = 'DC'

        const heroes = getHeroesByOwner(owner);

        const heroesData = heroes.filter(h => h.owner === 'DC');

        expect(heroes).toEqual(heroesData);
    })

    test('Debe de retornar un arreglo con los héroes de Marvel', () => {
    
        const heroes = getHeroesByOwner('Marvel');

        expect(heroes.length).toBe(2);
    })
    
})