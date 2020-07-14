import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import React from "react";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe("Pruebas del componente GifGrid", () => {
	const category = "Dragon Ball";

	test("Debe generarse correctamente", () => {
		useFetchGifs.mockReturnValue({
			data: [],
			loading: true
		});

		const wrapper = shallow(<GifGrid category={category} />);
		expect(wrapper).toMatchSnapshot();
	});

	test("Debe de mostrar items cuando se cargan imágenes useFetchGifs ", () => {
		const gifs = [
			{
				id: "ABC",
				title: "Random",
				url: "https://localhost/cosa.jpg"
			},
			{
				id: "CBDE",
				title: "Random",
				url: "https://localhost/cosa.jpg"
			}
		];

		useFetchGifs.mockReturnValue({
			data: gifs,
			loading: false
		});

		const wrapper = shallow(<GifGrid category={category} />);

		// expect(wrapper).toMatchSnapshot();
		expect(wrapper.find("p").exists()).toBe(false);
		expect(wrapper.find("GifGridItem").length).toBe(gifs.length);
	});
});
