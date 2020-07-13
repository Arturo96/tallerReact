import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import React from 'react';
import { AddMarca } from '../../components/AddMarca';

describe('Pruebas en AddMarca', () => {

    const agregarMarca = jest.fn();
    let wrapper = shallow(<AddMarca agregarMarca={agregarMarca} />)

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddMarca agregarMarca={agregarMarca} />);
    })

    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Valor de prueba';

        input.simulate('change', {target: {value} });
        expect(wrapper.find('p').text().trim()).toBe(value);
    })

    test('No debe de postear la información con submit', () => {
        
        const form = wrapper.find('form');
        form.simulate('submit', { preventDefault(){} });

        expect(agregarMarca).not.toHaveBeenCalled();
    })
    
    test('debe de llamar el agregarMarca y limpiar la caja de texto', () => {
        wrapper.find('input').simulate('change', {target: {value: 'Un valor'}});
        // console.log('Input:', wrapper.find('input').prop('value'));

        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect(agregarMarca).toHaveBeenCalled();
        expect(agregarMarca).toHaveBeenCalledTimes(1); // Se debe llamar 1 vez
        // expect(agregarMarca).toHaveBeenCalledWith(expect.any(Function)); agregarMarca debe tener como parametro una función

        expect(wrapper.find('input').prop('value')).toBe('');
    })
    
    
    
})
