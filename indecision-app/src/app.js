// stateless functional component

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: props.options
    };
  }

  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }
  // handlePick - pass down to Action and setup onClick - bind here
  // randomly pick an option and alert it
  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }
  handleAddOption(option) {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    } 
    
    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option)
      };
    });
  }

  render() {
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header subtitle={subtitle}/>
        <Action 
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
          />
        <Options 
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption 
          handleAddOption={this.handleAddOption}
        />
      </div>  
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
};

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: 'Indecision'
};

const Action = (props) => {
  return (
    <div>
      <button onClick={props.handlePick}
        disabled={!props.hasOptions}
      >
        What should I do?
      </button>
    </div>
  );
};

// Setup options prop for Options component
// Render the length of the array
// Render new p tag for each option (set text, set key)
// Add Remove All button
// Setup handleRemoveAll - alert some message
// setup onClick to fire the method


const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {
        props.options.map((option) => <Option key={option} optionText={option}/>)
      }
    </div>
  );
}

const Option = (props) => {
  return (
    <div>
      {props.optionText}
    </div>
  );
}

// 1. Setup the form with text input and submit button
// 2. Wire up onSubmit
// 3. handleAddOption -> Fetch the value typed -> if value, then alert

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }
  handleAddOption (e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    
    this.setState(() => {
      return { error };
    });
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"/>
          <button>Add Option</button>
        </form>
      </div>
    );
  }
} 

// const User = (props) => {
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//     </div>
//   )
// }; 

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));