import { Row, Col } from "react-bootstrap";
import products from '../products';
import Product from '../components/Product';

const Home = () => {
  return (
    <>
      <h1 className="text-center">Featured products</h1>
      <Row>
        {products.map(item => (
          <Col key={item.id} sm={12} md={6} lg={4} xl={3} className="my-3">
            <Product product={item} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Home;