import '@testing-library/jest-dom';
import {retornaArreglo} from '../../base-pruebas/07-deses-arr';

describe('Pruebas en 07-deses-arr.js', () => {
    test('debe retornar un string y un número', () => {
        const [letras, numeros] = retornaArreglo();

        expect(typeof(letras)).toBe('string');
        expect(typeof(numeros)).toBe('number');

    })
    

})