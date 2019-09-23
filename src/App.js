import React from 'react';

import P5Wrapper from 'react-p5-wrapper';
import sketch from './sketch/sketch.js';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <P5Wrapper sketch={sketch} />
      </div>
    );
  }
}

export default App;
