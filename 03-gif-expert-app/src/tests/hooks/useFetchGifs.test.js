import '@testing-library/jest-dom';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import {renderHook} from '@testing-library/react-hooks';

describe('Pruebas del hook useFetchGifs', () => {


    test('Debe de retornar el estado inicial', async() => {

        const category = 'Dragon Ball';

        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs(category));

        const {data, loading} = result.current; 

        await waitForNextUpdate();
        
        expect(data).toEqual([]);
        expect(loading).toBeTruthy();
    })

    test('Debe de retornar un arreglo de imgs y el loading en false', async() => {
        const category = 'Dragon Ball';

        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs(category));

        await waitForNextUpdate();

        const {data, loading} = result.current;

        expect(data.length).toBe(10);
        expect(loading).toBeFalsy();
    })
    
})