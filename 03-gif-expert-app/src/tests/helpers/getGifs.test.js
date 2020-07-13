const { getGifs } = require("../../helpers/getGifs")

describe('Pruebas de getGifs Fetch', () => {
    test('debe de traer 10 elementos', async() => {
        
        const gifs = await getGifs('One Punch');

        expect(gifs.length).toBe(10);
    })

    test('El getGifs debe estar vacío', async() => {
        
        const gifs = await getGifs('');

        expect(gifs.length).toBe(0);
    })
    
})