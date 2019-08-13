import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import '../App.css';

function ButtonPanel({ clickHandler }) {
  const allProps = (buttonName, color, width) => {
    // eslint-disable-next-line no-shadow
    const handleClick = (buttonName) => {
      clickHandler(buttonName);
    };
    const props = {
      clickHandler: handleClick,
      name: buttonName,
      color,
      width,
    };
    return props;
  };

  return (
    <div>
      <div className="row">
        <Button {...allProps('AC')} />
        <Button {...allProps('+/-')} />
        <Button {...allProps('%')} />
        <Button {...allProps('÷', 'orange')} />
      </div>
      <div className="row">
        <Button {...allProps('7')} />
        <Button {...allProps('8')} />
        <Button {...allProps('9')} />
        <Button {...allProps('X', 'orange')} />
      </div>
      <div className="row">
        <Button {...allProps('4')} />
        <Button {...allProps('5')} />
        <Button {...allProps('6')} />
        <Button {...allProps('-', 'orange')} />
      </div>
      <div className="row">
        <Button {...allProps('1')} />
        <Button {...allProps('2')} />
        <Button {...allProps('3')} />
        <Button {...allProps('+', 'orange')} />
      </div>
      <div className="row">
        <Button {...allProps('0', undefined, true)} />
        <Button {...allProps('.')} />
        <Button {...allProps('=', 'orange')} />
      </div>
    </div>
  );
}

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
