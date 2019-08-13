import React from 'react';
import PropTypes from 'prop-types';

export default function Display(props) {
  const { result, next } = props;

  return (
    <div className="display">
      {next || result || '0'}
    </div>
  );
}

Display.propTypes = {
  result: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
};
