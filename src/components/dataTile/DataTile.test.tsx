import { createRoot } from 'react-dom/client';
import { act } from 'react-dom/test-utils';

import DataTile from '.';

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

describe('DataTile component', () => {
  it('Children exists, no title, green theme', () => {
    act(() => {
      root.render(<DataTile theme='green'>Test value</DataTile>);
    });
    expect(container.querySelector('p:first-child').textContent).toBe('Aktualne ph wody');
    expect(container.querySelector('p:nth-child(2)').textContent).toBe('Test value');
  });
  it('Children exists, no title, no theme', () => {
    act(() => {
      root.render(<DataTile>Test value</DataTile>);
    });
    expect(container.querySelector('p:first-child').textContent).toBe('Aktualna temperatura');
    expect(container.querySelector('p:nth-child(2)').textContent).toBe('Test value');
  });
  it('Children exists, no title, blue theme', () => {
    act(() => {
      root.render(<DataTile theme='blue'>Test value</DataTile>);
    });
    expect(container.querySelector('p:first-child').textContent).toBe('Aktualna temperatura');
    expect(container.querySelector('p:nth-child(2)').textContent).toBe('Test value');
  });
  it('Children exists, no title, yellow theme', () => {
    act(() => {
      root.render(<DataTile theme='yellow'>Test value</DataTile>);
    });
    expect(container.querySelector('p:first-child').textContent).toBe('Status grzałki');
    expect(container.querySelector('p:nth-child(2)').textContent).toBe('Test value');
  });
  it('Children exists, no title, teal theme', () => {
    act(() => {
      root.render(<DataTile theme='teal'>Test value</DataTile>);
    });
    expect(container.querySelector('p:first-child').textContent).toBe('Status światła');
    expect(container.querySelector('p:nth-child(2)').textContent).toBe('Test value');
  });
  it('No children, title exists, no theme', () => {
    act(() => {
      root.render(<DataTile title='Test title'></DataTile>);
    });
    expect(container.querySelector('p:first-child').textContent).toBe('Test title');
    expect(container.querySelector('p:nth-child(2)').textContent).toBe('???');
  });
});
