import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Counter extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      count:0,
    }
  }

    handleClick=(e,v)=> {
      this.setState({
        count:this.state.count +v
      })
    }


  render(){
    return <div>
      <div>
      <h1>Counter App</h1>
      </div>
      <div>
        <p>Count: {this.state.count}</p>
      </div>
      <div>
        <button type='button' name='Increment' onClick={(e) => {this.handleClick(e,1)}}>
          Increment
        </button >
        <button type='button' name='Decrement' onClick={(e) => {this.handleClick(e,-1)}}>
          Decrement
        </button >
      </div>
    </div>
  }

}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Counter />
  </React.StrictMode>
);

