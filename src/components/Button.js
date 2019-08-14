import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';

function Button(props) {
  const { color = 'gray', width = false, name } = props;
  return (
    <div className={`button button-${color} ${width ? 'wide' : ''}`}>
      <p>{ name }</p>
    </div>
  );
}

Button.propTypes = {
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  width: PropTypes.bool.isRequired,
};
export default Button;
