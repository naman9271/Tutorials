import React from 'react';
import {render , screen} from '@testing-library/react';
import HelloWorld from '../../src/components/HelloWorld';

describe('HelloWorld', () => {
  it('should renders a Hello World component', () => {
    render(<HelloWorld />)
    expect(screen.getByText('HelloWorld')).toBeInTheDocument()
  });
});