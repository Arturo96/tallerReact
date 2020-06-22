
describe('En este test, vamos a comparar si hay dos usuarios con el mismo nombre', () => {
    
    test('Los usuarios son iguales', () => {
        
        const usuario1 = "Arturo96";
    
        const usuario2 = "Arturo96";
    
        expect(usuario1).toBe(usuario2);
    
    })
})
