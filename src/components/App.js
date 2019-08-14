import React from 'react';
import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      result: '',
    };
  }

  render() {
    const { result } = this.state;
    return (
      <div className="container">
        <Display result={result} />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;
