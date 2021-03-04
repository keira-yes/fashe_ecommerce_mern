import {Row, Col, Image, ListGroup, ListGroupItem, Button} from "react-bootstrap";
import products from '../products';

const ProductPage = ({ match }) => {
  const product = products.find(item => item.id === match.params.id);

  return (
    <Row>
      <Col md={6}>
        <Image src={`/images/products/${product.image}`} fluid />
      </Col>
      <Col md={6}>
        <ListGroup variant="flush">
          <ListGroupItem>
            <span>{product.brand}</span>
            <h1>{product.name}</h1>
            <strong>${product.price}</strong>
          </ListGroupItem>
          <ListGroupItem>
            <p>Category: {product.category}</p>
            <p>{product.description}</p>
            <p>{product.countInStock > 0 ?
            `In stock: ${product.countInStock}` :
              "Out of stock"
            }</p>
            <Button
              type="button"
              variant="dark"
              disabled={product.countInStock === 0}
            >Add to cart
            </Button>
          </ListGroupItem>
        </ListGroup>
      </Col>
    </Row>
  )
}
export default ProductPage;