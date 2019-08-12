import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const first = Big(numberOne);
  const second = Big(numberTwo);

  let output;
  switch (operation) {
    case '÷':
      if (second.valueOf() === '0') {
        return 'Not a number';
      }
      output = first.div(second).valueOf();
      break;

    case '-':
      output = first.minus(second).valueOf();
      break;

    case '+':
      output = first.plus(second).valueOf();
      break;

    case 'X':
      output = first.times(second).valueOf();
      break;

    default:
      break;
  }
  return output;
};

export default operate;
