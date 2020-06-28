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

    test('debe de mostrar el subtitulo enviado por props', () => {
        const saludo = 'Hola Arturo';
        const subTitle = 'Esto es un subtitulo';
        
        const wrapper = shallow(<Hola 
            saludo={saludo}
            subtitle={subTitle}
            />);

        const elParrafo = wrapper.find('p').text();
        expect(elParrafo).toBe(subTitle);
    })
    
    
    
})