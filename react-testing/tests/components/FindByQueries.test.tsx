import React from 'react';
import { render, screen } from '@testing-library/react';
import FindByQueries from '../../src/components/FindByQueries';

describe('FindByQueries', () => {

    test('find an element by its text content', async () => {
       render(<FindByQueries />);
       const paragraph = await screen.findByText(/Hello World/i);
       const header= await screen.findByText(/FindBy Queries Test/i);
       
       expect(paragraph).toBeInTheDocument();
       expect(header).toBeInTheDocument();
    });

    test('find an element by its aria-label', async () => {
        render(<FindByQueries />);
        const button = await screen.findByLabelText(/click-me/i);
        expect(button).toBeInTheDocument();
    });

    test('find an element by its placeholder text', async () => {
        render(<FindByQueries />);
        const input = await screen.findByPlaceholderText(/enter text here/i);
        expect(input).toBeInTheDocument();
    });

    test('find an element by its alt text', async () => {
        render(<FindByQueries />);
        const image = await screen.findByAltText(/test-image/i);
        expect(image).toBeInTheDocument();
    });

    test('find an element by its display value', async () => {      
        render(<FindByQueries />);
        const input = await screen.findByDisplayValue(/This is a test input/i);
        expect(input).toBeInTheDocument();
    });
    test('find an element by its test ID', async () => {
        render(<FindByQueries />);
        const element = await screen.findByTestId('test-element');
        expect(element).toBeInTheDocument();
    });
    test('find an element by its label text', async () => {
        render(<FindByQueries />);
        const label = await screen.findByLabelText(/test input label/i);
        expect(label).toBeInTheDocument();
    });
});