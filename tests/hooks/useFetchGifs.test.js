import { useFetchGifs } from "../../src/hooks/useFetchGifs";
import { renderHook, waitFor } from "@testing-library/react";

describe('Pruebas en el hook useFetchGifs', () => {
    test('Tiene que regresar el estado inicial.', () => {
        const { result } = renderHook(() => useFetchGifs('Michael Scott'));
        const { images, isLoading } = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();

    });

    test('Tiene que regresar un arreglo de imagenes y el isLoading en false.', async () => {
        
        const { result } = renderHook(() => useFetchGifs('Michael Scott'));
        
        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0)
        );

        const{images, isLoading} = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).not.toBeTruthy();

    });
})