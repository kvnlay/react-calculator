import React from 'react';
import PropTypes from 'prop-types';

export default function Display(props) {
  const { result, next, error } = props;

  return (
    <div className="display">
      {next || result || error || '0'}
    </div>
  );
}

Display.propTypes = {
  result: PropTypes.string,
  next: PropTypes.string,
  error: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
  next: null,
  error: null,
};
