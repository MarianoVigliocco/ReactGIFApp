import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Test <AddCategory/>', () => {

    test('Debe cambiar el valor de la caja de texto.', () => {

        render(<AddCategory onNewCategory={() => { }} />);
        const input = screen.getByRole('textbox');

        fireEvent.input(input, { target: { value: 'River Plate' } });

        expect(input.value).toBe('River Plate')

    });

    test('Debe llamar onNewCategory si el campo tiene mas de 1 caracter.', () => {

        const inputValue = 'River Plate';
        const onNewCategory = jest.fn()

        render(<AddCategory onNewCategory={ onNewCategory } />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);

        expect(input.value).toBe("");
        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith( inputValue );

    });

    test('No se tiene que llamar el onNewCategory si el input está vacío.', () => {
        
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={ onNewCategory }/>);

        const form = screen.getByRole('form');
        fireEvent.submit(form);
        
        expect(onNewCategory).toHaveBeenCalledTimes(0);

    });

})