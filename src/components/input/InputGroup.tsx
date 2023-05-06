import { ReactElement } from 'react';
import { FormGroupProps } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

import Input from './Input';

type Props = FormGroupProps & {
  label: string;
  children: ReactElement<typeof Input>;
};

const InputGroup = ({ label, children, ...props }: Props) => (
  <Form.Group {...props}>
    <Form.Label className="mt-4 mb-0">
      <h5>{label}</h5>
    </Form.Label>
    {children}
  </Form.Group>
);

export default InputGroup;
