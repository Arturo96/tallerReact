import {getHeroeByIdAsync} from '../../base-pruebas/09-promesas';
import '@testing-library/jest-dom';
import heroes from '../../data/heroes';

describe('Pruebas con promesas', () => {
    test('getHeroeByIdAsync debe retornar un heroe con Async ', (done) => {
        const id = 1;

        getHeroeByIdAsync(id).then(heroe => {
            expect(heroe).toBe(heroes[id - 1]);
            done();
        })
    })

    test('getHeroeByIdAsync debe retornar un error si el héroe no existe', (done) => {
        const id = 10;

        getHeroeByIdAsync(id).catch(err => {
            expect(err).toBe('No se pudo encontrar el héroe');
            done();
        })
    })

    
    
})