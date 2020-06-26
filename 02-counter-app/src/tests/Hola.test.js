import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import Hola from '../Hola';

describe('Pruebas del componente Hola', () => {
    test('debe de mostrar el mensaje Hola Arturo', () => {
        const saludo = "Hola Arturo";

        const { getByText} = render(<Hola saludo={saludo} />);

        expect(getByText(saludo)).toBeInTheDocument();


    })
    
})