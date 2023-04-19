import Card from 'react-bootstrap/Card';

type Props = {
  children: string;
  theme:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'info'
    | 'warning'
    | 'danger'
    | 'dark';
};

const DataTile = ({ children, theme }: Props) => (
  <Card body className={`border-left-${theme}`}>
    {children}
  </Card>
);

export default DataTile;
