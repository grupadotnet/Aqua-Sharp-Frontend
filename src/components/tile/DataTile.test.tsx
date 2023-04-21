import { createRoot } from 'react-dom/client';
import { act } from 'react-dom/test-utils';

import DataTile from './Tile';

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
  it('No title, green theme', () => {
    act(() => {
      root.render(<DataTile theme="green">Test value</DataTile>);
    });
    expect(container.querySelector('p:first-child').textContent).toBe('');
    expect(container.querySelector('p:nth-child(2)').textContent).toBe(
      'Test value'
    );
  });
  it('No title, teal theme', () => {
    act(() => {
      root.render(<DataTile theme="teal">Test value</DataTile>);
    });
    expect(container.querySelector('p:first-child').textContent).toBe('');
    expect(container.querySelector('p:nth-child(2)').textContent).toBe(
      'Test value'
    );
  });
  it('No title, yellow theme', () => {
    act(() => {
      root.render(<DataTile theme="yellow">Test value</DataTile>);
    });
    expect(container.querySelector('p:first-child').textContent).toBe('');
    expect(container.querySelector('p:nth-child(2)').textContent).toBe(
      'Test value'
    );
  });
  it('No title, blue theme', () => {
    act(() => {
      root.render(<DataTile theme="blue">Test value</DataTile>);
    });
    expect(container.querySelector('p:first-child').textContent).toBe('');
    expect(container.querySelector('p:nth-child(2)').textContent).toBe(
      'Test value'
    );
  });
  it('Title exists, green theme', () => {
    act(() => {
      root.render(
        <DataTile theme="green" title="Test title">
          Test value
        </DataTile>
      );
    });
    expect(container.querySelector('p:first-child').textContent).toBe(
      'Test title'
    );
    expect(container.querySelector('p:nth-child(2)').textContent).toBe(
      'Test value'
    );
  });
  it('Title exists, teal theme', () => {
    act(() => {
      root.render(
        <DataTile theme="teal" title="Test title">
          Test value
        </DataTile>
      );
    });
    expect(container.querySelector('p:first-child').textContent).toBe(
      'Test title'
    );
    expect(container.querySelector('p:nth-child(2)').textContent).toBe(
      'Test value'
    );
  });
  it('Title exists, yellow theme', () => {
    act(() => {
      root.render(
        <DataTile theme="yellow" title="Test title">
          Test value
        </DataTile>
      );
    });
    expect(container.querySelector('p:first-child').textContent).toBe(
      'Test title'
    );
    expect(container.querySelector('p:nth-child(2)').textContent).toBe(
      'Test value'
    );
  });
  it('Title exists, blue theme', () => {
    act(() => {
      root.render(
        <DataTile theme="blue" title="Test title">
          Test value
        </DataTile>
      );
    });
    expect(container.querySelector('p:first-child').textContent).toBe(
      'Test title'
    );
    expect(container.querySelector('p:nth-child(2)').textContent).toBe(
      'Test value'
    );
  });
});
