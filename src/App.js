import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      text: "Eid Mubarak 🌙",
      condition: true
    };
  }

  toggle() {
    this.setState({
      text: this.state.condition ? "Pakistan 🇵🇰" : "Eid Mubarak 🌙",
      condition: !this.state.condition
    });
    
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Assignment No.2</h1>
        </header>
        <div style={{ backgroundColor:'#222', color: 'white', height: '40px',margin: 0}}>
          <h4 style={{ margin: 0 }}>Toggling Text &amp; Difference between calling a function</h4>
        </div>
        <div className="container">
          <hr/><p>1) Using states, render a text "Hello World", on clicking it, it should toggle to "Hello Pakistan", and vice versa!</p><hr/>
          <h1 className="App-intro"> {this.state.text} </h1>
          <button onClick={this.toggle.bind(this)}>Change Text</button>
          <br /><br />
          <br /><br />
          <hr/>
          <p>2) Write the difference between onClick=&#123;this.myFunc&#125;, onClick=&#123;() => this.myFunc()&#125; & onClick=&#123;this.myFunc.bind(this&#125;&#125; and when to use which one.</p>
          <hr/>
          <div>
            <h6>If we use like this "onClick=&#123;this.myFunc&#125;", we have to bind this function in the constructor to get "this" Object. It calls directly but does'nt have "this" object.</h6>
            <h6>If we use like this "onClick=&#123;() => this.myFunc()&#125;", this method calls as the event fires.</h6>
            <h6>If we use like this "onClick=&#123;this.myFunc.bind(this&#125;&#125;", we can get the 'this' object. We can use it as inline binding</h6>
          </div>
        </div>
        <footer>Made by: <a href="https://github.com/ManalLiaquat">Manal Liaquat</a></footer>
      </div>
    );
  }
}

export default App;
