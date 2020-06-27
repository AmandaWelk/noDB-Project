import React, {Component} from 'react';
import './App.css';
//import { response } from 'express';
import axios from 'axios';
import Choose from './Components/Choose';

class App extends Component {
  constructor() {
    super();

    this.state = {
      herbArr: [],
      vegArr: []
    }

  }

  getHerbs = () => {
    axios.get('/plant/herb')
    .then(response => {
      this.setState({
        herbArr: response.data
      });
    });
  };

  getVeggies = () => {
    axios.get('/plant/veggies')
    .then(response => {
      this.setState({
        vegArr: response.data
      });
    });
  }



  render() {
    console.log(this.state.herbArr)
    console.log(this.state.vegArr)
    return(
      <div>
        <Choose getHerbs={this.getHerbs} getVeggies={this.getVeggies}/>
      </div>
    )
  }
}

export default App;
