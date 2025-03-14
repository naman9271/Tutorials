import React from 'react';
import {render,screen} from '@testing-library/react';
import GetByQueries from '../../src/components/GetByQueries';

describe('GetByQueries',()=>{
    it('should render the component with correct heading',()=>{
        render(<GetByQueries/>);
        const heading = screen.getByText('My Component');
        expect(heading).toBeInTheDocument();
    })

    it('should find an input with placeholder text',()=>{
        render(<GetByQueries/>)
        const placeholder = screen.getByPlaceholderText('Enter Text')
        expect(placeholder).toBeInTheDocument();
    })

    it ('should find an anchor tag with specific href',()=>{
        render(<GetByQueries/>)
        const anchor = screen.getByRole('link',{name:/Google/i})
        expect(anchor).toHaveAttribute("href","https://www.google.com");
    })

    it('should find a div with specific data-testid',()=>{
        render(<GetByQueries/>)
        const customElement = screen.getByTestId('custom-element');
        expect(customElement).toBeInTheDocument();
    })

    it('should find a button with specific aria-label',()=>{
        render(<GetByQueries/>)
        const submitButton = screen.getByLabelText('submit');
        expect(submitButton).toBeInTheDocument();
    })
    it('should find a button with specific role',()=>{
        render(<GetByQueries/>)
        const submitButton = screen.getByRole('button',{name:/Submit/i});
        expect(submitButton).toBeInTheDocument();
    })

    it('should find a button with specific id',()=>{
        render(<GetByQueries/>)
        const cancelButton = screen.getByRole('button',{name:/Cancel/i});
        expect(cancelButton).toBeInTheDocument();
    })
})
