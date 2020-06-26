import {getImagen} from '../../base-pruebas/11-async-await';
import '@testing-library/jest-dom';

describe('Pruebas con Async Await', () => {
    test('debe de retornar el url de la imagen ', async() => {
        const url = await getImagen();
        expect(url.includes('https://')).toBe(true);
    })
    
})