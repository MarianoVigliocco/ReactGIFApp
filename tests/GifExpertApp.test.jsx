import { render, screen, fireEvent } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"

describe('Pruebas en <GifExpertApp />', () => {
    test('Si se carga la misma categoría, debe haber un aviso.', () => {
        render(<GifExpertApp />);
    });

    test('Al agregarse una categoría, se debe validar que la anterior se mantenga.', () => {
        render(<GifExpertApp />);
    });
});
