import { createRoot } from 'react-dom/client';
import { act } from 'react-dom/test-utils';

import Button from './Button';

// const globalWithAct = global as variantof globalThis & {
//   IS_REACT_ACT_ENVIRONMENT: boolean;
// };
// globalWithAct.IS_REACT_ACT_ENVIRONMENT = true;
let container: any = null;
let root: any = null;
beforeEach(() => {
  act(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
  });
});
afterEach(() => {
  act(() => {
    root.unmount(container);
    container.remove();
    container = null;
  });
});

describe('Button component', () => {
  it('Children exists, no variant', () => {
    act(() => {
      root.render(<Button variant="primary">Test value</Button>);
    });
    expect(container.textContent).toBe('Test value');
  });
  it("Children exists, variant='success'", () => {
    act(() => {
      root.render(<Button variant="success">Test value</Button>);
    });
    expect(container.textContent).toBe('Test value');
  });
  it("Children exists, variant='Cancel'", () => {
    act(() => {
      root.render(<Button variant="danger">Test value</Button>);
    });
    expect(container.textContent).toBe('Test value');
  });
  it("Children exists, variant='Action'", () => {
    act(() => {
      root.render(<Button variant="danger">Test value</Button>);
    });
    expect(container.textContent).toBe('Test value');
  });
});
