import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import CounterApp from '../CounterApp';
import React from 'react';

describe('Pruebas del componente CounterApp', () => {

    let wrapper = shallow(<CounterApp />);

    beforeEach(() => {
        wrapper = shallow(<CounterApp />);
    })

    test('Debe de mostrar <CounterApp /> con sus valores default', () => {

        expect(wrapper).toMatchSnapshot();
    })

    test('Debe de mostrar el contador por defecto 100', () => {
        const wrapper = shallow(<CounterApp value={ 100 } />);

        const counter = parseInt(wrapper.find('h2').text());

        expect(counter).toBe(100);
    })
    
    test('Debe de incrementar con el botón +1', () => {
        wrapper.find('button').at(0).simulate('click');

        const counter = parseInt(wrapper.find('h2').text());

        expect(counter).toBe(11);



    })

    test('Debe de decrementar con el botón -1', () => {

        wrapper.find('button').at(2).simulate('click');

        const counter = parseInt(wrapper.find('h2').text());

        expect(counter).toBe(9);

    })
    
    test('Debe de resetear el valor con el botón Reset', () => {

        wrapper = shallow(<CounterApp value={ 105 } />);

        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');

        const counter = parseInt(wrapper.find('h2').text());

        expect(counter).toBe(105);

    })
    
})