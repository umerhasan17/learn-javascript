import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    // set our state - JSON object which holds values
    this.state = {
      paras: 4 , 
      html : true , 
      text : ''
    }
  }

  // when making calls to APIs traditional to put it inside a lifecycle function
  componentWillMount() {
    this.getSampleText();
  }

  getSampleText() {
    axios.get('http://hipsterjesus.com/api?paras='+this.state.paras+'&html='+this.state.html)
      .then((response => {
        this.setState({text : response.data.text} , function () {
          console.log(this.state);
        });
      }))
      .catch((err) => {
        console.log(err);
      })
  }
  
  render() {
    return (
      <div className="App">
      
      </div>
    );
  }
}

export default App;
