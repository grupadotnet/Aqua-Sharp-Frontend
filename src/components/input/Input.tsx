import { FormControlProps } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

const Input = ({ ...props }: FormControlProps) => (
  <Form.Control {...props} className="rounded-pill" />
);

export default Input;
