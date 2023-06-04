import React from 'react';
import { Card } from 'react-bootstrap';

import './Tile.scss';

type Props = {
  header: string;
  children: React.ReactNode;
};

const Tile = ({ header, children }: Props) => (
  <Card className="my-3">
    <Card.Header className="font-weight-bold text-dark text-first-upper">
      {header}
    </Card.Header>
    <Card.Body className="d-flex flex-column gap-4">{children}</Card.Body>
  </Card>
);

export default Tile;
