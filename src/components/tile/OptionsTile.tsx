import React from 'react';
import { Card } from 'react-bootstrap';

import { EllipsisDropdown } from '@/components';

import './Tile.scss';

type Props = React.ComponentPropsWithoutRef<typeof EllipsisDropdown> & {
  tileHeader: string;
  children: React.ReactNode;
};

const OptionsTile = ({ tileHeader, children, ...dropdownProps }: Props) => {
  return (
    <Card>
      <Card.Header className="font-weight-bold text-primary d-flex justify-content-between">
        {tileHeader}
        <EllipsisDropdown {...dropdownProps} />
      </Card.Header>
      <Card.Body className="d-flex flex-column gap-4">{children}</Card.Body>
    </Card>
  );
};

export default OptionsTile;
