import React, { Component,useState } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: ''
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}
const Input = () => {
  const [inputText,setInputText] = useState("");
  const [historyText,setHistoryText] = useState([]);

  return (
    <div>
      <input type="text" onChange= {(e) => {
        setInputText(e.target.value);
        setHistoryText([...historyText,e.target.value]);
      }}/><br/>
      {inputText}
      <hr/><br/><br/>
      {
        historyText.map( rec => {
          return <div>{rec}</div>
        })
      }
    </div>
  ) 
}

render(<Input />, document.getElementById('root'));
