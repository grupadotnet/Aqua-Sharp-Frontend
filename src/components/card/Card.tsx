import { ReactElement } from 'react';
import Card from 'react-bootstrap/Card';

type Props = {
  children: string | ReactElement;
  theme:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'info'
    | 'warning'
    | 'danger'
    | 'dark';
};

const DataCard = ({ children, theme }: Props) => (
  <Card body className={`border-left-${theme}`}>
    {children}
  </Card>
);

export default DataCard;
