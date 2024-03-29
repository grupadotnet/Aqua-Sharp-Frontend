import { createRoot } from 'react-dom/client';
import { act } from 'react-dom/test-utils';

import Button from './Button';

// const globalWithAct = global as variantof globalThis & {
//   IS_REACT_ACT_ENVIRONMENT: boolean;
// };
// globalWithAct.IS_REACT_ACT_ENVIRONMENT = true;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let container: any = null;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
  it("variant='primary'", () => {
    act(() => {
      root.render(<Button variant="primary">Test value</Button>);
    });
    expect(container.textContent).toBe('Test value');
  });
  it("variant='success'", () => {
    act(() => {
      root.render(<Button variant="success">Test value</Button>);
    });
    expect(container.textContent).toBe('Test value');
  });
  it("variant='danger'", () => {
    act(() => {
      root.render(<Button variant="danger">Test value</Button>);
    });
    expect(container.textContent).toBe('Test value');
  });
  it("variant='warning'", () => {
    act(() => {
      root.render(<Button variant="warning">Test value</Button>);
    });
    expect(container.textContent).toBe('Test value');
  });
});
