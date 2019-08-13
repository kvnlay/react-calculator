import React from 'react';
import calculate from '../logic/calculate';
import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

class App extends React.Component {

  state = {
    total: '',
    next: null,
    operation: null,
  };

  handleClick = buttonName => {
    this.setState(prevState => calculate(prevState, buttonName));
  };

  render() {
    const { total, next } = this.state;
    return (
      <div className="container">
        <Display result={total} next={next} />
        <ButtonPanel clickHandler={this.handleClick}/>
      </div>
    );
  }
}

export default App;
