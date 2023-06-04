import { Button as ButtonComponent } from 'react-bootstrap';

type Props = React.ComponentProps<typeof ButtonComponent> & {
  variant: Theme;
  children: string;
};

const Button = ({ children, ...passThroughProps }: Props) => (
  <ButtonComponent {...passThroughProps} className="rounded-pill p-2">
    {children}
  </ButtonComponent>
);

export default Button;
