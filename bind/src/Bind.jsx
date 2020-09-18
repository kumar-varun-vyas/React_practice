import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
  state = {
    name: "varun"
  }

  ChangeName = (newName)=> {
    this.setState({name: newName });
  }

  ChangeNameInput = (event)=> {
    this.setState({name: event.target.value  });
  }
  render(){
    return(
      <div className = "App">
        <br/> <br/>
        <button onClick = {() =>this.ChangeName("Awesome name")} >Change state</button>
        <button onClick = {this.ChangeName.bind(this,"Awesome name bind")} >bind Change state</button>
        <br/> <br/>
        <input onChange = {this.ChangeNameInput} />
        <div>{this.state.name}</div>
      </div>
    );
  }
}

export default App;