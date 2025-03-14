import React from 'react';
import { render, screen } from '@testing-library/react';
import QueryByAll from '../../src/components/QueryAllBy';

describe('QueryByAll', () => {
    it('should render the component all by role', () => {
        render(<QueryByAll />);
        
        //query all elements by ROLE

        const buttons = screen.queryAllByRole('button');
        const alerts = screen.queryAllByRole('alert');
        const regions = screen.queryAllByRole('region');

        expect(buttons.length).toBe(2);
        expect(alerts.length).toBe(2);
        expect(regions.length).toBe(2);

        buttons.forEach(button => {
            expect(button).toBeInTheDocument();
        });

        alerts.forEach(alert => {
            expect(alert).toBeInTheDocument();
        });

        regions.forEach(region => {
            expect(region).toBeInTheDocument();
        });

    });

    it('should render the component all by label text', () => {
        render(<QueryByAll />); 

        //query all elements by LABEL TEXT
        const inputsByLabelText = screen.queryAllByLabelText(/label/i);
        expect(inputsByLabelText.length).toBe(3);

        inputsByLabelText.forEach(input => {
            expect(input).toBeInTheDocument();
        });
    });
    it('should render all components by Placeholder Text', () => {
        render(<QueryByAll />);

        //query all elements by PLACEHOLDER TEXT    
        const searchInputs = screen.queryAllByPlaceholderText(/search/i);
        const emailInputs = screen.queryAllByPlaceholderText(/email/i);

        expect(searchInputs).toHaveLength(3);
        expect(emailInputs).toHaveLength(1);

        searchInputs.forEach(searchInput => {
            expect(searchInput).toBeInTheDocument();
        });

        emailInputs.forEach(emailInput => {
            expect(emailInput).toBeInTheDocument();
        });
    });
    it('should render the component all by text', () => {
        render(<QueryByAll />);
        
        //query all elements by TEXT

        const headerTexts = screen.queryAllByText(/header text/i);
        const paragraphTexts = screen.queryAllByText(/paragraph text/i);

        expect(headerTexts).toHaveLength(2);
        expect(paragraphTexts).toHaveLength(2);

        headerTexts.forEach(header => {
            expect(header).toBeInTheDocument();
        });

        paragraphTexts.forEach(paragraph => {
            expect(paragraph).toBeInTheDocument();
        });
    });
    it('should render the elements by Data Test ID', () => {
        render(<QueryByAll />);

        const customElements = screen.queryAllByTestId('custom-element');
        expect(customElements).toHaveLength(2);

        customElements.forEach(customElement => {
            expect(customElement).toBeInTheDocument();
        });
    });
    it('should render the elements by Display Value', () => {
        render(<QueryByAll />);
        
        //query all elements by DISPLAY VALUE

        const displayValues = screen.queryAllByDisplayValue(/pre-filled text/i);
        expect(displayValues).toHaveLength(3);

        displayValues.forEach(displayValue => {
            expect(displayValue).toBeInTheDocument();
            expect(displayValue).toBeDisabled();
        });
    });
});