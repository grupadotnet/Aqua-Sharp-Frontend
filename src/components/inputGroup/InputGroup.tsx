import React from 'react';
import { Col, FormGroupProps, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

type Props = FormGroupProps & {
  label: string;
  children: React.ReactNode;
};

const InputGroup = ({ label, children, ...props }: Props) => {
  return (
    <Col className="p-0">
      <Form.Group {...props}>
        <Form.Label className="m-0 text-first-upper">
          <p className="mb-2">{label}</p>
        </Form.Label>
        <Row className="">{children}</Row>
      </Form.Group>
    </Col>
  );
};

export default InputGroup;
