import Button from 'react-bootstrap/Button';

type Props = React.ComponentProps<typeof Button> & {
  variant: Theme;
  children: string;
};

const Btn = ({ children, ...passThroughProps }: Props) => (
  <Button {...passThroughProps} className="rounded-pill p-3">
    {children}
  </Button>
);

export default Btn;
