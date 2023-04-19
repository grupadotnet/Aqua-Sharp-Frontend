import Card from 'react-bootstrap/Card';

import './DataTile.scss';

type Props = {
  children: string;
  theme: string;
};

const DataTile = ({ children, theme }: Props) => (
  <Card body className={`border-left-primary`}>
    {children}
  </Card>
);

export default DataTile;
