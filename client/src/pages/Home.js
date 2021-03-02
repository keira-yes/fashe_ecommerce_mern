import { Container, Row, Col } from "react-bootstrap";
import products from '../products';
import Product from '../components/Product';

const Home = () => {
  return (
    <main className="py-5">
      <Container>
        <h1>Featured products</h1>
        <Row>
          {products.map(item => (
            <Col key={item._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </main>
  )
}

export default Home;