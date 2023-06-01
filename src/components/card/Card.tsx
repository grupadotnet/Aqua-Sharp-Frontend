import { ReactElement } from 'react';
import Card from 'react-bootstrap/Card';

type Props = {
  children: string | ReactElement;
  theme: Theme;
  isAChild?: boolean;
};

const DataCard = ({ children, theme, isAChild = false }: Props) => (
  <Card body className={`${isAChild ? '' : 'shadow'} border-left-${theme}`}>
    {children}
  </Card>
);

export default DataCard;
