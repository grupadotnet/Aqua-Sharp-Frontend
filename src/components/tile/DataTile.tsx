import Stack from 'react-bootstrap/Stack';

import Tile from './Tile';

import './DataTile.scss';

type Props = {
  children: string;
  title: string;
  theme:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'info'
    | 'warning'
    | 'danger'
    | 'dark';
};

const DataTile = ({ children, title, theme }: Props) => (
  <Tile theme={`${theme}`}>
    <Stack>
      <div className={`fs-6 fw-semibold text-${theme} text-uppercase mb-1`}>
        {title}
      </div>
      <div className="h5 mb-0 fw-semibold text-gray-800">{children}</div>
    </Stack>
  </Tile>
);

export default DataTile;
