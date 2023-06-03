import Stack from 'react-bootstrap/Stack';

import Card from './Card';

import './DataCard.scss';

type Props = {
  children: string;
  title: string;
  theme: Theme;
  isAChild?: boolean;
};

const DataCard = ({ children, title, theme, isAChild = false }: Props) => (
  <Card isAChild={isAChild} theme={`${theme}`}>
    <Stack>
      <div className={`fs-6 fw-semibold text-${theme} text-uppercase mb-1`}>
        {title}
      </div>
      <div className="h5 mb-0 fw-semibold text-gray-800">{children}</div>
    </Stack>
  </Card>
);

export default DataCard;
