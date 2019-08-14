import operate from './operate';

const calculate = (data, buttonName) => {
  let newData = Object.assign({}, data);
  switch (buttonName) {
    case 'AC':
      newData = {
        total: '',
        next: null,
        operation: null,
        error: null,
      };
      break;

    case '+/-':
      if (newData.next) {
        newData.next = (+newData.next * -1).toString();
      }
      newData.total = (+newData.total * -1).toString();
      break;

    case '+':
    case '-':
    case 'X':
    case '÷':
      if (newData.total && newData.next && newData.operation) {
        if (newData.operation === '÷' && newData.next === '0') {
          newData.total = null;
          newData.next = null;
          newData.operation = null;
          newData.error = 'error';
        } else {
          newData.total = operate(newData.total, newData.next, newData.operation);
          newData.next = null;
          newData.operation = buttonName;
        }
      } else if (newData.total && newData.next === null) {
        newData.operation = buttonName;
      }
      break;
    case '%':
      if (newData.next) {
        newData.next = (+newData.next / 100).toString();
      } else {
        newData.total = (+newData.total / 100).toString();
      }
      break;
    case '=':
      if (newData.next) {
        newData.total = operate(newData.total, newData.next, newData.operation);
        newData.next = null;
      }
      newData.operation = null;
      break;
    case '.':
      if (newData.operation === '=') {
        newData.total = '0.';
        newData.next = null;
        newData.operation = null;
      }
      if (!newData.next && !newData.operation) {
        if (newData.total) {
          if (!newData.total.split('').includes('.')) {
            newData.total += '.';
          }
        } else {
          newData.total = '0.';
        }
      } else if (newData.total && newData.operation) {
        if (newData.next) {
          if (!newData.next.split('').includes('.')) {
            newData.next += '.';
          }
        } else {
          newData.next = '0.';
        }
      }
      break;

    default:
      if (newData.operation === '=' || newData.total === 'Not a number' || newData.error) {
        newData.total = '';
        newData.operation = null;
      }

      if (newData.operation === null) {
        newData.total = newData.total === '0' ? buttonName : (newData.total += buttonName);
      } else {
        newData.next = newData.next === null ? buttonName : (newData.next += buttonName);
      }
      break;
  }
  return newData;
};

export default calculate;
