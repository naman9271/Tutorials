import React from "react";
import { render, screen } from "@testing-library/react";
import QueryByQueries from "../../src/components/QueryByQueries";

describe("QueryByQueries", () => {

    it("should render query by role", () => {
        render(<QueryByQueries />);

        const alert = screen.queryByRole("alert");
        expect(alert).toBeInTheDocument();

        const button = screen.queryByRole("button");
        expect(button).toBeInTheDocument();

        
    });
    
    it('should query by label text',()=>{

        render(<QueryByQueries />);

        const label1 = screen.queryByLabelText("Label 1");
        expect(label1).toBeInTheDocument();
    
        const input1 = screen.queryByPlaceholderText("Search");
        expect(input1).toBeInTheDocument();
    
        const label2 = screen.queryByLabelText("Label 2");
        expect(label2).toBeInTheDocument();
    });

    it('should query by text content',()=>{
        render(<QueryByQueries />);

        const header = screen.queryByText(/Header Text/i);
        expect(header).toBeInTheDocument();

        const paragraph = screen.queryByText(/This is some paragraph text./i);
        expect(paragraph).toBeInTheDocument();
    });

    it('should query by data-testid',()=>{
        render(<QueryByQueries />);

        const customElement = screen.queryByTestId('custom-element');
        expect(customElement).toBeInTheDocument();
    });

    it('should query by display value',()=>{
        render(<QueryByQueries />);

        const input = screen.queryByDisplayValue('Pre-Defined');
        expect(input).toBeInTheDocument();
        expect(input).toBeDisabled();
    });
})