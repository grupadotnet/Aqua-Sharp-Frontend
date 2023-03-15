import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

type Props = {
  children: React.ReactNode;
};

const ChartWrapper = ({ children }: Props) => (
  <Container fluid>
    <Row>{children}</Row>
  </Container>
);

export default ChartWrapper;
