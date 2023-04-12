import { FormControlProps } from 'react-bootstrap';

import Input from './Input';

const PasswordInput = ({ ...props }: FormControlProps) => (
  <Input {...props} type="password" />
);

export default PasswordInput;
