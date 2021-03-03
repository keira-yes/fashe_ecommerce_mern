import { Card } from 'react-bootstrap';

const Product = ({ product }) => {
  return (
    <Card>
      <a href={`/product/${product.id}`}>
        <Card.Img src={`/images/products/${product.image}`} variant="top" />
      </a>
      <Card.Body>
        <Card.Text as="span" className="card-brand">{product.brand}</Card.Text>
          <Card.Title as="h3" className="mt-1 mb-2">
            <a href={`/product/${product.id}`}>{product.name}</a>
          </Card.Title>
        <Card.Text as="span">
          {product.rating} from {product.numReviews} reviews
        </Card.Text>
        <Card.Text as="strong" className="card-price mt-2">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product;