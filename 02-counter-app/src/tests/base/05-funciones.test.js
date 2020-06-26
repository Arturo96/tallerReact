import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones";
import '@testing-library/jest-dom';

describe("Test de 05-funciones.js", () => {
	test("el getUser debe retornar un objeto con ciertos valores", () => {
		const userTest = {
			uid: "ABC123",
			username: "El_Papi1502"
        };
        
        const user = getUser();

        expect(user).toEqual(userTest);
    });

    test('el getUsuarioActivo debe de retornar un objeto ', () => {
        
        const nombre = 'Arturo Vargas';

        const usuarioTest = {
            uid: 'ABC567',
            username: nombre
        }

        const usuario = getUsuarioActivo(nombre);

        expect(usuario).toEqual(usuarioTest);
    })
    
    

});
