import React from 'react';
import {screen, render } from '@testing-library/react';
import FindingElementsByRole from '../../src/components/FindingElementsByRole';

describe ("FindingElemenrsByRole Component",()=>{
    it('should query for a link by role',()=>{
        render(<FindingElementsByRole/>)
        const link = screen.getByRole('link')
        expect(link).toBeInTheDocument()
    })
    it('should query for a button by role',()=>{
        render(<FindingElementsByRole/>)
        const button = screen.getByRole('button')
        expect(button).toBeInTheDocument()
    })
    it('should query for a footer by role',()=>{
        render(<FindingElementsByRole/>)
        const footer = screen.getByRole('contentinfo')
        expect(footer).toBeInTheDocument()
    })
    it('should query for a heading by role',()=>{
        render(<FindingElementsByRole/>)
        const heading = screen.getByRole('heading')
        expect(heading).toBeInTheDocument()
    })
    it('should query for a header by role',()=>{
        render(<FindingElementsByRole/>)
        const banner = screen.getByRole('banner')
        expect(banner).toBeInTheDocument()
    })
    it('should query for a img by role',()=>{
        render(<FindingElementsByRole/>)
        const img = screen.getByRole('img')
        expect(img).toBeInTheDocument()
    })
    it('should query for a number input by role',()=>{
        render(<FindingElementsByRole/>)
        const spinbutton = screen.getByRole('spinbutton')
        expect(spinbutton).toBeInTheDocument()
    })
    it('should query for a List by role',()=>{
        render(<FindingElementsByRole/>)
        const list= screen.getByRole('list')
        expect(list).toBeInTheDocument()
    })
    it('should query for a ListItem by role',()=>{
        render(<FindingElementsByRole/>)
        const listitem= screen.getByRole('listitem')
        expect(listitem).toBeInTheDocument()
    })
})