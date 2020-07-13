import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import React from 'react';
import { AddMarca } from '../../components/AddMarca';

describe('Pruebas en AddMarca', () => {

    const agregarMarca = () => {

    }

    const wrapper = shallow(<AddMarca agregarMarca={agregarMarca} />)
    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
})
