import { ReactElement } from 'react';
import Card from 'react-bootstrap/Card';

type Props = {
  children: string | ReactElement;
  theme: Theme;
  withoutShadow?: boolean;
};

const DataCard = ({ children, theme, withoutShadow = false }: Props) => (
  <Card
    body
    className={`${withoutShadow ? '' : 'shadow'} border-left-${theme} mb-3`}
  >
    {children}
  </Card>
);

export default DataCard;
