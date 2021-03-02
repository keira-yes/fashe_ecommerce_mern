import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="py-3 mt-auto">
      <Container fluid>
        <Row>
          <Col className="text-center">2021 &copy; Fashe</Col>
        </Row>
      </Container>
      
    </footer>
  )
}

export default Footer;