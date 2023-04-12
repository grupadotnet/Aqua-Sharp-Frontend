import Button from 'react-bootstrap/Button';

type Props = React.ComponentProps<typeof Button> & {
  variant: 'success' | 'primary' | 'danger' | 'warning' | 'secondary';
  children: string;
};

const Btn = ({ children, ...passThroughProps }: Props) => (
  <Button {...passThroughProps} className="rounded-pill">
    {children.toUpperCase()}
  </Button>
);

export default Btn;
