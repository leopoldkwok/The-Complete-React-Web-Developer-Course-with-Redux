'use strict';

console.log('App.js is running!');

// JSX - Javascript XML
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Indecision App'
  ),
  React.createElement(
    'p',
    null,
    'This is some info'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item One'
    ),
    React.createElement(
      'li',
      null,
      'Item Two'
    )
  )
);

// Create a templateTwo var JSX expression
// div
//  h1 -> Andrew Mead
// p -> Age: 36
// p -> Location: Philadelphia
// Render templateTwo instead of template

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Andrew Mead'
  ),
  React.createElement(
    'p',
    null,
    'Age: 36'
  ),
  React.createElement(
    'p',
    null,
    'Location: Philadelphia'
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
