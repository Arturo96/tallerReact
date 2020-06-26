import '@testing-library/jest-dom';
const { getSaludo } = require("../../base-pruebas/02-template-string");

describe('EL test del archivo 02-template-string.js', () => {

    test('el getSaludo debe retornar Hola + nombre', () => {

        const miNombre = 'Arturo';

        expect(getSaludo(miNombre)).toBe('Hola ' + miNombre + "!");
        
    })

    test('el getSaludo debe retornar Hola Carlos! si no hay parámetros', () => {
        
        expect(getSaludo()).toBe('Hola Carlos!');
    })
    
    
})