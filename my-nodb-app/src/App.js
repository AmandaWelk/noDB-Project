import React, {Component} from 'react';
import './App.css';
//import { response } from 'express';
import axios from 'axios';
import Choose from './Components/Choose';
import Header from './Components/Header';
import Footer from './Components/Footer';

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
      })
    })
    .catch(err => console.log(err));
  };

  getVeggies = () => {
    axios.get('/plant/veggies')
    .then(response => {
      this.setState({
        vegArr: response.data
      })
    })
    .catch(err => console.log(err));
  }

  



  render() {
    //console.log(this.state.herbArr)
    //console.log(this.state.vegArr)
    return(
      <div className="background">
        <Header/>
        <Choose getHerbs={this.getHerbs} getVeggies={this.getVeggies} herbArr={this.state.herbArr} vegArr={this.state.vegArr}/>
        <Footer/>
      </div>
    )
  }
}

export default App;
