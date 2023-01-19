import { render } from '@testing-library/react';
import Button from '.';

describe('Button component', () =>{
    it('Children exists', () => {
        const { getByTestId } = render(<Button type='OK' data-testid='testbutton'>Test value</Button>);
        expect(getByTestId('testbutton').textContent).toBe('Test value');
        expect(getByTestId('testbutton').style.backgroundColor).toBe('#1cc88a');
    })
})