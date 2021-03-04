import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Rating from './Rating';

const Product = ({ product }) => {
  return (
    <Card>
      <Link to={`/product/${product.id}`}>
        <Card.Img src={`/images/products/${product.image}`} variant="top" />
      </Link>
      <Card.Body>
        <Card.Text as="span" className="card-brand">{product.brand}</Card.Text>
          <Card.Title as="h3" className="mt-1 mb-2">
            <Link to={`/product/${product.id}`}>{product.name}</Link>
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