import React, { Component, useState } from 'react';  //hooks 'useState'
import logo from './logo.svg';
import './App.css';

import Bum from './Bum/Bum';

class App extends Component {
  state = {
      // the name 'state' is fixed
      count : 0,
      persons:[
        {name:'Sakai', career:'Samarai'},
        {name:'Yuna', career:'Warrior'},
        {name:'Taka', career:'Hero'}
      ],
      otherstate : 'other',
      showBlock: 'false'
  }

  switchNameHandler = (newName) => {
    // console.log('is clicked');
    this.setState ({
      persons:[
        {name:'A', career:'A'},
        {name:'B', career:'B'},
        {name: newName, career:'C'}
      ]
    })
  }

  nameChangeHandler = (event) =>{
    this.setState ({
      persons:[
        {name:'Sakai', career:'SAMARI'},
        {name: event.target.value, career:'Samarai'},
        {name: 'wala', career:'Samarai'}
      ]
    })
  }

  toggleHandler = () =>{
    if (this.state.showBlock === 'false'){
      this.setState({showBlock:'true'});
    }else{
      this.setState({showBlock:'false'});
    }
  }

  render() {
    const style = {
      backgroundColor: 'blue',
      border: '1px solid black'
      // not using
    }

    let person = null;
    if (this.state.showBlock === 'true'){
      person = (
        <div>
          {this.state.persons.map(person =>{
            return <Bum name={person.name} career={person.career} />
          })}
        </div>

        // JSX Must have one parent Element, which is <div> here!!
      );
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Burger List
        </p>
        <button onClick={this.toggleHandler} >Toggle Button</button>
        {person}
        {/* <Bum style={style} name={this.state.persons[0].name} career={this.state.persons[0].career} age="100" />
        <Bum name={this.state.persons[1].name} career={this.state.persons[1].career} 
        change={this.switchNameHandler}
        changed ={this.nameChangeHandler}>Powershell</Bum>
        <Bum name={this.state.persons[2].name} career={this.state.persons[2].career}>I am {this.state.count}</Bum> */}
        <button onClick={() => this.switchNameHandler('NewName')}>Click Change Name</button>
        <button onClick={this.switchNameHandler.bind(this,'Masaka')}>Click</button>
        {/* bind is prefereed!, function can render too many times and be inefficient in performance */}
      </div>
    );
  }
}



export default App; //functional composnent export as lowercase 'app', app is my function name
//for the functional component


//*replace all variable name select var, press cmd/ctr + f2