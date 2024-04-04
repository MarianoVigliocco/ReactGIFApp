import { getGifs } from "../../src/helpers/getGifs";

describe('Test getGifs function.', () => {

    test('Debe retornar un arreglo de gifs.', async() => {

        const gifs = await getGifs('Michael Scott');
        expect(gifs.length).toBeGreaterThan( 0 );
        expect( gifs[0] ).toEqual( {
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        } )

    })

})