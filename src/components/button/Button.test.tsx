import { createRoot } from 'react-dom/client';
import { act } from 'react-dom/test-utils';

import Button from '.';

const globalWithAct = global as typeof globalThis & {
  IS_REACT_ACT_ENVIRONMENT: boolean;
};
globalWithAct.IS_REACT_ACT_ENVIRONMENT = true;
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
  it('Children exists, no type', () => {
    act(() => {
      root.render(<Button>Test value</Button>);
    });
    expect(container.textContent).toBe('Test value');
  });
  it("Children exists, type='OK'", () => {
    act(() => {
      root.render(<Button type="OK">Test value</Button>);
    });
    expect(container.textContent).toBe('Test value');
  });
  it("Children exists, type='Cancel'", () => {
    act(() => {
      root.render(<Button type="Cancel">Test value</Button>);
    });
    expect(container.textContent).toBe('Test value');
  });
  it("Children exists, type='Action'", () => {
    act(() => {
      root.render(<Button type="Action">Test value</Button>);
    });
    expect(container.textContent).toBe('Test value');
  });
  it("Children doesn't exist, no type", () => {
    act(() => {
      root.render(<Button></Button>);
    });
    expect(container.textContent).toBe('');
  });
  it("Children doesn't exist, type='OK'", () => {
    act(() => {
      root.render(<Button type="OK"></Button>);
    });
    expect(container.textContent).toBe('Zatwierdź');
  });
  it("Children doesn't exist, type='Cancel'", () => {
    act(() => {
      root.render(<Button type="Cancel"></Button>);
    });
    expect(container.textContent).toBe('Anuluj');
  });
  it("Children doesn't exist, type='Action'", () => {
    act(() => {
      root.render(<Button type="Action"></Button>);
    });
    expect(container.textContent).toBe('');
  });
});
