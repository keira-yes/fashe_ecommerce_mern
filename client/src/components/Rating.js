import PropTypes from 'prop-types';

const Rating = ({ value }) => {
  return (
    <span>
      {[1, 2, 3, 4, 5].map((item, index) => (
        <i
          key={index}
          className={
          index < (value - 0.5) ?
            "fas fa-star" :
          index === (value - 0.5) ?
            "fas fa-star-half-alt" :
            "far fa-star"
          }
          aria-label="Rating star icon"
        >
        </i>
      ))}
    </span>
  )
}

Rating.propTypes = {
  value: PropTypes.number.isRequired
}

export default Rating;