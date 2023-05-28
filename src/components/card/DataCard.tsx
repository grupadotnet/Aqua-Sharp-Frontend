import Stack from 'react-bootstrap/Stack';

import Card from './Card';

import './DataCard.scss';

type Props<T> = {
  content: T;
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

const DataCard = <T extends string>({ content, title, theme }: Props<T>) => (
  <Card theme={`${theme}`}>
    <Stack>
      <div className={`fs-6 fw-semibold text-${theme} text-uppercase mb-1`}>
        {title}
      </div>
      <div className="h5 mb-0 fw-semibold text-gray-800">{content}</div>
    </Stack>
  </Card>
);

export default DataCard;
