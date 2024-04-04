import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs')

describe('Pruebas en <GifGrid/>.', () => {

    const category = 'The Office'

    test('Debe mostrar el "loading" inicialmente.', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        })

        render(<GifGrid category={category} />);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category))

    });

    test('Debe mostrar items cuando se cargan las imagenes con useFetchGifs', () => {

        const gifs = [{
            id: 'ABC',
            title: 'Michael Scott',
            url: 'https://localhost/michael.jpg'
        },
        {
            id: 'DEF',
            title: 'Jim Halpert',
            url: 'https://localhost/jim.jpg'
        }]
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        })

        render(<GifGrid category={category} />);
        expect( screen.getAllByRole('img').length).toBe(2)
    })
})