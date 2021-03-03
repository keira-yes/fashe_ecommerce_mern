import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Rating from './Rating';

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
        <Card.Text className="card-rating">
          <Rating value={product.rating} />
          <span>{product.numReviews} reviews</span>
        </Card.Text>
        <Card.Text as="strong" className="card-price mt-2">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

Product.propTypes = {
  product: PropTypes.object.isRequired
}

export default Product;