console.log('App.js is running!');

// create app object title/subtitle
// use title/subtitle in the template
// render template

var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer'
};

// JSX - Javascript XML
var template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
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

var user = {
  name: 'Andrew',
  age: 26,
  location: 'Philadelphia'
};

var templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
  </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);