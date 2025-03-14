import {render, screen} from '@testing-library/react';
import GetAllByQueries from '../../src/components/GetAllByQueries';
import React from 'react';

describe('GetAllByQueries', () => {

    it('should render multiple elements that can be queried by various methods', () => {
        render(<GetAllByQueries />);
        
        // Debug the current state of the DOM
        screen.debug();

        // Get all elements with label text
        const inputsByLabelText = screen.getAllByLabelText(/label for input/i);
        expect(inputsByLabelText.length).toBe(2);

        inputsByLabelText.forEach(input => {
            expect(input).toBeInTheDocument();
        });

        // Get all elements by placeholder text
        const inputsByPlaceholderText = screen.getAllByPlaceholderText(/enter something/i);
        expect(inputsByPlaceholderText.length).toBe(2);

        inputsByPlaceholderText.forEach(input => {
            expect(input).toBeDisabled();
        });

        // Get all elements by text content
        const paragraphsByTextContent = screen.getAllByText(/this is a paragraph with some text content/i);
        expect(paragraphsByTextContent.length).toBe(2);

        paragraphsByTextContent.forEach(paragraph => {
            expect(paragraph).toBeInTheDocument();
        });

        // Get all elements by display value
        const inputsByDisplayValue = screen.getAllByDisplayValue(/display value/i);
        expect(inputsByDisplayValue.length).toBe(2);

        inputsByDisplayValue.forEach(input => {
            expect(input).toBeInTheDocument();
        });

        // Get all elements by alt text
        const imagesByAltText = screen.getAllByAltText(/image/i);   
        expect(imagesByAltText.length).toBe(2);

        imagesByAltText.forEach(image => {
            expect(image).toBeInTheDocument();
        });
        
        //Get all button 
        const buttons = screen.getAllByRole('button',{name:/disabled button/i});
        expect(buttons.length).toBe(2);

        buttons.forEach(button => {
            expect(button).toBeInTheDocument();
            expect(button).toBeDisabled();
        });


        //Get all by Data-testid
        const divsByTestId = screen.getAllByTestId(/custom-test-id/i);
        expect(divsByTestId.length).toBe(2);

        divsByTestId.forEach(div => {
            expect(div).toBeInTheDocument();
        }); 
    });
});