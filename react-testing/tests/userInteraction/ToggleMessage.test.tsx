import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ToggleMessage from "../../src/userInteraction/ToggleMessage";


describe('ToggleMessage', () => {
    it('should toggle the message when the button is clicked', async() => {
        render(<ToggleMessage />);
        const button = screen.getByRole('button', {name: /toggle message/i});

        expect(screen.queryByText(/this message is visible/i)).toBeNull();

        await userEvent.click(button);
        expect(screen.getByText(/this message is visible/i)).toBeInTheDocument();

        await userEvent.click(button);
        expect(screen.queryByText(/this message is visible/i)).toBeNull();
    });
});