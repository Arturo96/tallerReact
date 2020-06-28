import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import React from 'react';
import Hola from '../Hola';

describe('Pruebas del componente Hola', () => {
    // test('debe de mostrar el mensaje Hola Arturo', () => {
    //     const saludo = "Hola Arturo";
    //     const { getByText} = render(<Hola saludo={saludo} />);
    //     expect(getByText(saludo)).toBeInTheDocument();
    // })

    test('debe de mostrar <Hola /> correctamente ', () => {

        const saludo = 'Hola Arturo';
        
        const wrapper = shallow(<Hola saludo={saludo}/>);

        expect(wrapper).toMatchSnapshot();

    })
    
    
})