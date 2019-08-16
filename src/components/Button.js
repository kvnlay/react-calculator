import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';

function Button(props) {
  const {
    color,
    width,
    name,
    clickHandler,
  } = props;

  const handleClick = () => clickHandler(name);
  return (
    // eslint-disable-next-line react/button-has-type
    <button
      className={`button button-${color} ${width ? 'wide' : ''}`}
      onClick={handleClick}
    >
      { name }
    </button>
  );
}

Button.propTypes = {
  color: PropTypes.string,
  name: PropTypes.string.isRequired,
  width: PropTypes.bool,
  clickHandler: PropTypes.func.isRequired,
};

Button.defaultProps = {
  color: 'gray',
  width: false,
}
export default Button;
