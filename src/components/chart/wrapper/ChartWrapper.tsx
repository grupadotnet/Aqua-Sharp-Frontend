import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import './chartWrapper.scss';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const ChartWrapper = ({ children, className }: Props) => (
  <Container className={className} fluid>
    <Row className="chart-wrapper-row">{children}</Row>
  </Container>
);

export default ChartWrapper;
