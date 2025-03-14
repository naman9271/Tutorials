import React from 'react';
import { render, screen } from '@testing-library/react';
import FindAllByQueries from '../../src/components/FindAllByQueries';

describe('FindAllByQueries', () => {

    //run before each test
    beforeEach(() => {
        render(<FindAllByQueries />);
    });

    it('finds all the elements by the text',async()=>{
        const paragraphs = await screen.findAllByText(/Item/i);
        expect(paragraphs.length).toBe(3);  

        paragraphs.forEach(paragraph => {
            expect(paragraph).toBeInTheDocument();
        });
    })

    it('finds all the elements by the role',async()=>{
        const buttons = await screen.findAllByRole('button');
        expect(buttons.length).toBe(3);  

        buttons.forEach(button => {
            expect(button).toBeInTheDocument();
        });
    });

    it('finds all the elements by the placeholder text',async()=>{
        const inputs = await screen.findAllByPlaceholderText(/Enter text here/i);
        expect(inputs).toHaveLength(3);  

        inputs.forEach(input => {
            expect(input).toBeInTheDocument();
        });
    });

    it('finds all the elements by the alt text',async()=>{
        const images = await screen.findAllByAltText(/test-image/i);
        expect(images.length).toBe(3);  

        images.forEach(image => {
            expect(image).toBeInTheDocument();
        });
    });
    it('finds all the elements by the data-testid',async()=>{
        const elements = await screen.findAllByTestId('test-element');
        expect(elements.length).toBe(3);  

        elements.forEach(element => {
            expect(element).toBeInTheDocument();
        });
    });
    it('finds all the elements by the display value',async()=>{
        const inputs = await screen.findAllByDisplayValue(/Test input/i);
        expect(inputs.length).toBe(3);  

        inputs.forEach(input => {
            expect(input).toBeInTheDocument();
        });
    });
});