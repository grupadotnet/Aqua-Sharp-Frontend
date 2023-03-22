import Button from 'react-bootstrap/Button';

type Props = React.ComponentProps<typeof Button> & {
  variant: 'success' | 'primary' | 'danger' | 'warning' | 'secondary';
};

const Btn = ({ children, ...passThroughProps }: Props) => (
  <Button {...passThroughProps}>{children}</Button>
);

export default Btn;
