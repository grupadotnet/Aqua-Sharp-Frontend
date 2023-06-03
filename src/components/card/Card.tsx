import { ReactElement } from 'react';
import Card from 'react-bootstrap/Card';

type Props = {
  children: string | ReactElement;
  theme: Theme;
};

const DataCard = ({ children, theme }: Props) => (
  <Card body className={`shadow border-left-${theme}`}>
    {children}
  </Card>
);

export default DataCard;
