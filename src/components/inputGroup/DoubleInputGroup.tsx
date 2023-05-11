import React from 'react';
import { Col } from 'react-bootstrap';

import { Input } from '..';
import InputGroup from './InputGroup';

type Props = Omit<
  React.ComponentProps<typeof InputGroup> & {
    placeholderLeft?: string;
    placeholderRight?: string;
  },
  'children'
>;

const SingleInputGroup = ({
  placeholderLeft,
  placeholderRight,
  ...props
}: Props) => (
  <InputGroup {...props}>
    <Col>{placeholderLeft && <Input placeholder={placeholderLeft} />}</Col>
    <Col>{placeholderRight && <Input placeholder={placeholderRight} />}</Col>
  </InputGroup>
);

export default SingleInputGroup;
