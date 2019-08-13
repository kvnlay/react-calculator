import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';

function Button(props) {
  const {
    color = 'gray',
    width = false,
    name,
    clickHandler,
  } = props;

  const handleClick = () => clickHandler(name);
  return (
    <button
      className={`button button-${color} ${width ? 'wide' : ''}`}
      onClick={handleClick}
    >
      { name }
    </button>
  );
}

Button.propTypes = {
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  width: PropTypes.bool.isRequired,
  clickHandler: PropTypes.func.isRequired,
};
export default Button;
