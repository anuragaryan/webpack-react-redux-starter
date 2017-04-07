import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <div>
    <h1>Hello, world!</h1>
    <img src={require('./assets/images/military-alphabet.png')} />
    <button className="btn btn-primary">Button</button>
  </div>,
  document.getElementById('root')
);
