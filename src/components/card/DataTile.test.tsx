import { createRoot } from 'react-dom/client';
import { act } from 'react-dom/test-utils';

import DataTile from './DataTile';

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
  it('Success theme', () => {
    act(() => {
      root.render(
        <DataTile theme="success" title="Test">
          123
        </DataTile>
      );
    });
    expect(container.querySelector('.text-success').textContent).toBe('Test');
    expect(container.querySelector('div:nth-child(2)').textContent).toBe('123');
  });
  it('Info theme', () => {
    act(() => {
      root.render(
        <DataTile theme="info" title="Test">
          123
        </DataTile>
      );
    });
    expect(container.querySelector('.text-info').textContent).toBe('Test');
    expect(container.querySelector('div:nth-child(2)').textContent).toBe('123');
  });
  it('Warning theme', () => {
    act(() => {
      root.render(
        <DataTile theme="warning" title="Test">
          123
        </DataTile>
      );
    });
    expect(container.querySelector('.text-warning').textContent).toBe('Test');
    expect(container.querySelector('div:nth-child(2)').textContent).toBe('123');
  });
  it('Primary theme', () => {
    act(() => {
      root.render(
        <DataTile theme="primary" title="Test">
          123
        </DataTile>
      );
    });
    expect(container.querySelector('.text-primary').textContent).toBe('Test');
    expect(container.querySelector('div:nth-child(2)').textContent).toBe('123');
  });
});
