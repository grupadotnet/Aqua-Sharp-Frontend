import { FormControlProps } from 'react-bootstrap';

import Input from './Input';

const EmailInput = ({ ...props }: FormControlProps) => (
  <Input {...props} type="email" />
);

export default EmailInput;
