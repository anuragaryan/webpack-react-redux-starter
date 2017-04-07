const css = require('./app.scss');
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <div>
    <h1>Hello, world!</h1>
    <img src={require('./images/military-alphabet.png')} />
  </div>,
  document.getElementById('root')
);
