// Create three methods: handleAddOne, handleMinusOne, handleReset
// Use console.log to print method name
// Wire up onClick & bind in the constructor

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0
    };
  }
  handleAddOne () {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
  };
  
  handleMinusOne () {
    // Call this.setState decrement the count by 1
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      }
    });
  };
  
  handleReset () {
    this.setState(() => {
      return {
        count: 0
      };
    });
  };
  
  render () {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
} 

ReactDOM.render(<Counter />, document.getElementById("app"));

// // Challenge
// // Make button "-1" - setup minusOne function and register - log "minusOne"
// // Make reset button "reset" - setup reset function - log "reset"

// let count = 0;
// const addOne = () => {
//   count++;
//   renderCounterApp();
// };
// const minusOne = () => {
//   // subtract 1 from count - rerender
//   count--;
//   renderCounterApp();
// };
// const reset = () => {
//   // set count to 0 a rerender
//   count = 0;
//   renderCounterApp();
// };

// const templateTwo = (
//   <div>
//     <h1>Count: {count}</h1>
//     <button onClick={addOne}>+1</button>
//     <button onClick={minusOne}>-1</button>
//     <button onClick={reset}>reset</button>
//   </div>
// );

// ReactDOM.render(templateTwo, appRoot);

// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>reset</button>
//     </div>
//   );

//   ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();