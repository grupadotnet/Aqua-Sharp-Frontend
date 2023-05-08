import { ReactElement } from 'react';
import { Button as ButtonComponent } from 'react-bootstrap';

type Props = React.ComponentProps<typeof ButtonComponent> & {
  variant: Theme;
  children: ReactElement;
};

const CircularButton = ({ children, ...passThroughProps }: Props) => (
  <ButtonComponent {...passThroughProps} className="rounded-circle">
    {children}
  </ButtonComponent>
);

export default CircularButton;
