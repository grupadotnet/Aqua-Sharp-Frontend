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
    <Form.Label className="mt-2">
      <h4>{label}</h4>
    </Form.Label>
    {children}
  </Form.Group>
);

export default InputGroup;
