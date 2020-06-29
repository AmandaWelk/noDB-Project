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
      vegArr: [],
      gardenArr: []
    }

  }

  getHerbs = () => {
    axios.get('/plant/herb')
    .then(res => {
      this.setState({
        herbArr: res.data
      })
    })
    .catch(err => console.log(err));
  };

  getVeggies = () => {
    axios.get('/plant/veggies')
    .then(res => {
      this.setState({
        vegArr: res.data
      })
    })
    .catch(err => console.log(err));
  }

   removeFromGarden = (id) => {
    console.log('app', id)
    //await axios.post(`/myGarden/planted`, this.state.gardenArr)

    axios.delete(`/myGarden/planted/${id}`).then(res => {
        this.setState({
            gardenArr: res.data
        })
    })
}

moveHerbsToGarden = async (plant) => {
  let plants = await axios.post(`/myGarden/planted`, plant)
  console.log(plants.data)
  this.setState({
    gardenArr: plants.data
  })
}

moveVeggiesToGarden = async (plant) => {
  let plants = await axios.post(`/myGarden/planted`, plant)
  console.log(plants.data)
  this.setState({
    gardenArr: plants.data
  })
}

  



  render() {
    //console.log(this.state.gardenArr)
    //console.log(this.state.herbArr)
    //console.log(this.state.vegArr)
    return(
      <div className="background">
        <Header/>
        <Choose getHerbs={this.getHerbs} getVeggies={this.getVeggies} herbArr={this.state.herbArr} vegArr={this.state.vegArr}
        removeFromGarden={this.removeFromGarden} gardenArr={this.state.gardenArr}
        moveVeggies={this.moveVeggiesToGarden} moveHerbs={this.moveHerbsToGarden}/>
        <Footer/>
      </div>
    )
  }
}

export default App;
