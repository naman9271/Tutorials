import React from 'react';
import {screen , render} from '@testing-library/react'
import ProgrammingLanguagesList from '../../src/components/ProgrammingLanguagesList'

describe('ProgrammingLanguagesList Component',()=>{
    it('display a message when no programming languages are provided',()=>{
        render(<ProgrammingLanguagesList langugaes={[]} />)
        expect(screen.getByText(/no programming languages found/i)).toBeInTheDocument()
    })

    it('display a list of programming languages when provided',()=>{
        const languages = ['JavaScript','Python','Java']
        render(<ProgrammingLanguagesList langugaes={languages} />)
        languages.forEach(language=>{
            expect(screen.getByText(language)).toBeInTheDocument()
        })
    })
})