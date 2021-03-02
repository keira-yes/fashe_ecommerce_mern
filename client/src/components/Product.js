import { Card } from 'react-bootstrap';

const Product = ({ product }) => {
  return (
    <Card className="my-2">
      <a href={`/product/${product.id}`}>
        <Card.Img src={product.image} variant="top" />
      </a>
      <Card.Body>
        <a href={`/product/${product.id}`}>
          <Card.Title>{product.name}</Card.Title>
        </a>
        <Card.Text>
          {product.rating} from {product.numReviews} reviews
        </Card.Text>
        <Card.Text>${product.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product;