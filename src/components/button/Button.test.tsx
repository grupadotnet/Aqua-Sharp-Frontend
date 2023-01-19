import { render } from '@testing-library/react';
import Button from '.';

describe('Button component', () =>{
    it('Custom value provided', () => {
        const { getByText } = render(<Button value='Test value'></Button>);
        expect(getByText(/Test value/i).textContent).toBe('Test value');
    })
})