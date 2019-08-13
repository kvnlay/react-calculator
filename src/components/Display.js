import React from 'react';

export default function Display(props) {
  const { result } = props;

  return (
    <div className="display">
      <p>{result}</p>
    </div>
  );
}
