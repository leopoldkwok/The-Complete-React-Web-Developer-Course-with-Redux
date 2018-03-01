console.log('App.js is running!');

// JSX - Javascript XML
var template = (
  <div>
    <h1>Indecision App</h1>
    <p>This is some info</p>
    <ol>
      <li>Item One</li>
      <li>Item Two</li>
    </ol>
  </div>
);

// Create a templateTwo var JSX expression
// div
//  h1 -> Andrew Mead
// p -> Age: 36
// p -> Location: Philadelphia
// Render templateTwo instead of template

var templateTwo = (
  <div>
    <h1>Andrew Mead</h1>
    <p>Age: 36</p>
    <p>Location: Philadelphia</p>
  </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);