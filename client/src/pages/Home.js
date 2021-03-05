import {useEffect, useState} from 'react';
import axios from 'axios';
import { Row, Col } from "react-bootstrap";
import Product from '../components/Product';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async() => {
      const { data } = await axios('/api/products');
      setProducts(data);
    }
    fetchProducts();
  }, []);

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