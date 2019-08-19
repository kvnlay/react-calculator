import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import '../App.css';

function ButtonPanel({ clickHandler }) {
  return (
    <div>
      <div className="row">
        <Button name="AC" handleClick={clickHandler} />
        <Button name="+/-" handleClick={clickHandler} />
        <Button name="%" handleClick={clickHandler} />
        <Button name="÷" color="orange" handleClick={clickHandler} />
      </div>
      <div className="row">
        <Button name="7" handleClick={clickHandler} />
        <Button name="8" handleClick={clickHandler} />
        <Button name="9" handleClick={clickHandler} />
        <Button name="X" color="orange" handleClick={clickHandler} />
      </div>
      <div className="row">
        <Button name="4" handleClick={clickHandler} />
        <Button name="5" handleClick={clickHandler} />
        <Button name="6" handleClick={clickHandler} />
        <Button name="-" color="orange" handleClick={clickHandler} />
      </div>
      <div className="row">
        <Button name="1" handleClick={clickHandler} />
        <Button name="2" handleClick={clickHandler} />
        <Button name="3" handleClick={clickHandler} />
        <Button name="+" color="orange" handleClick={clickHandler} />
      </div>
      <div className="row">
        <Button name="0" width handleClick={clickHandler} />
        <Button name="." handleClick={clickHandler} />
        <Button name="=" color="orange" handleClick={clickHandler} />
      </div>
    </div>
  );
}

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
