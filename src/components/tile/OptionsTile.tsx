import React from 'react';
import { Card } from 'react-bootstrap';

import { EllipsisDropdown } from '@/components';

import './Tile.scss';

type Props = {
  tileHeader: string;
  children: React.ReactNode;
  dropdownHeader: string;
  dropdownItems: { label: string; value: string }[];
  dropdownOnClick: (code: string) => void;
};

const OptionsTile = ({
  tileHeader,
  children,
  dropdownHeader,
  dropdownItems,
  dropdownOnClick,
}: Props) => {
  return (
    <Card>
      <Card.Header className="font-weight-bold text-primary d-flex justify-content-between">
        {tileHeader}
        <EllipsisDropdown
          header={dropdownHeader}
          items={dropdownItems}
          onClick={dropdownOnClick}
        />
      </Card.Header>
      <Card.Body className="d-flex flex-column gap-4">{children}</Card.Body>
    </Card>
  );
};

export default OptionsTile;
