import React from 'react';
import { Col } from 'react-bootstrap';

import { Input } from '..';
import InputGroup from './InputGroup';

type Props = Omit<
  React.ComponentProps<typeof InputGroup> & {
    placeholder: string;
  },
  'children'
>;

const SingleInputGroup = ({ placeholder, ...props }: Props) => (
  <InputGroup {...props}>
    <Col>
      <Input placeholder={placeholder} />
    </Col>
  </InputGroup>
);

export default SingleInputGroup;
