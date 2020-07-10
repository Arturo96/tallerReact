import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import {GifGridItem} from '../components/GifGridItem';
import React from 'react';

describe('Pruebas del componente GifGridItem', () => {

    const title = 'Un título',
          url   = 'https://localhost/algo.jpg';

    test('Debe de mostrar el componente correctamente', () => {
        
        const wrapper = shallow(<GifGridItem url={url} title={title} />);

        expect(wrapper).toMatchSnapshot();

    })
    

});