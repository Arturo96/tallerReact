import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import {GifGridItem} from '../../components/GifGridItem';
import React from "react";

describe("Pruebas del componente GifGridItem", () => {
	const title = "Un título",
		url = "https://localhost/algo.jpg";

    const wrapper = shallow(<GifGridItem url={url} title={title} />);
    
	test("Debe de mostrar el componente correctamente", () => {
		expect(wrapper).toMatchSnapshot();
	});

	test("debe de tener un párrafo con el title", () => {
        expect(wrapper.find('p').text().trim()).toBe(title);
	});
	
	test('debe de tener la imagen igual al url y alt de los props', () => {
		const {src, alt} = wrapper.find('img').props();

		expect(src).toBe(url);
		expect(alt).toBe(title);
		
	})

	test('debe tener la clase animate__fadeIn', () => {
		const {className} = wrapper.find('div').props();
		const hasFadeIn = className.includes('animate__fadeIn');

		expect(hasFadeIn).toBe(true);
		
	})
	
});
