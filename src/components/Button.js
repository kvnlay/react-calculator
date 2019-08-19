import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';

function Button(props) {
  const {
    color,
    width,
    name,
    handleClick,
  } = props;
  const clickHandler = () => handleClick(name);
  return (
    // eslint-disable-next-line react/button-has-type
    <button
      className={`button button-${color} ${width ? 'wide' : ''}`}
      onClick={clickHandler}
    >
      { name }
    </button>
  );
}

Button.propTypes = {
  color: PropTypes.string,
  name: PropTypes.string.isRequired,
  width: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  color: 'gray',
  width: false,
}
export default Button;
