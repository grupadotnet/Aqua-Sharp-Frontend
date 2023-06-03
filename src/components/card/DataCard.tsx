import React from 'react';
import Stack from 'react-bootstrap/Stack';

import Card from './Card';

import './DataCard.scss';

type Props = {
  content: React.ReactNode;
  title: string;
  theme: Theme;
  withoutShadow?: boolean;
};

const DataCard = ({ content, title, theme, withoutShadow }: Props) => (
  <Card withoutShadow={withoutShadow} theme={theme}>
    <Stack>
      <div className={`fs-6 fw-semibold text-${theme} text-uppercase mb-1`}>
        {title}
      </div>
      <div className="h5 mb-0 fw-semibold text-gray-800">{content}</div>
    </Stack>
  </Card>
);

export default DataCard;
