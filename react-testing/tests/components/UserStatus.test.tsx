import React from "react";
import { render, screen } from "@testing-library/react";
import UserStatus from "../../src/components/UserStatus";

describe("UserStatus Componnet",()=>{
    it('display a welcome message when an email is provided',()=>{
        render(<UserStatus email="john@gmail.com"/>)
        expect(screen.getByText(/welcome/i)).toBeInTheDocument()
    })
    it('display a sign up button when no email is provided',()=>{
        render(<UserStatus email='' />)
        expect(screen.getByText(/sign up/i)).toBeInTheDocument()
    })
})