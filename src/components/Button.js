import React from 'react';

function Button(props) {
  const { name } = props;
  return (
    <div>
      <p>{ name }</p>
    </div>
  );
}

export default Button;
