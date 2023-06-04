import { Button as ButtonComponent } from 'react-bootstrap';

type Props = React.ComponentProps<typeof ButtonComponent> & {
  variant: Theme;
  children: string;
};

const Button = ({ children, ...passThroughProps }: Props) => (
  <ButtonComponent
    {...passThroughProps}
    className="rounded-pill p-3 w-100 text-first-upper"
  >
    {children}
  </ButtonComponent>
);

export default Button;
