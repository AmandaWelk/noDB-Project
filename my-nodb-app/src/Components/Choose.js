import React, {Component} from 'react';
//import Herbs from './Herbs';
//import Vegetables from './Vegetables'; 
import MyGarden from './MyGarden';
import axios from 'axios';

class Choose extends Component {
    constructor() {
        super();

        this.state = {
            gardenArr: [],
        };
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.gardenArr.length !== this.state.gardenArr.length) {
            this.updateGarden()
        }
    }

    updateGarden

    moveHerbsToGarden = (id) => {
        this.props.herbArr.map(obj => {
            if (id === obj.id) {
               this.setState({
                    gardenArr: [...this.state.gardenArr, obj]
                })
            }
        }) 
    }

    moveVeggiesToGarden = (id) => {
        this.props.vegArr.map(obj => {
            if (id === obj.id) {
                this.setState({
                    gardenArr: [...this.state.gardenArr, obj]
                })
            }
        }) 
    }

    removeFromGarden = (id) => {
        axios.delete(`/myGarden/planted/${id}`).then(response => {
            console.log(response.data)
        })
    }


    render() {
        const {getHerbs, getVeggies, herbArr, vegArr} = this.props;
        //console.log(herbArr)
        const herbsMapped = herbArr.map(obj => {
            return(
                <div className="herbsData">
                    <div>
                        <button onClick={() => this.moveHerbsToGarden(obj.id)}><img src={obj.image} alt='Herb' className="plantPics"/></button>
                    </div>
                    <h3>{`${obj.name}`}</h3>
                    <p>{`Uses: ${obj.uses}`}</p>
                </div>
            )
        })

        const veggiesMapped = vegArr.map(obj => {
            return(
                <div className="veggiesData">
                    <div>
                        <button onClick={() => this.moveVeggiesToGarden(obj.id)}><img src={obj.image} alt='Veggie' className="plantPics"/></button>
                    </div>
                    <h3>{`${obj.name}`}</h3>
                    <p>{`Types: ${obj.types}`}</p>
                </div>
            )
        })

        return(
             <div className="displayArrays">
                 <div className="chooseButtonsHolder">
                    <button className="choose-buttons" onClick={getHerbs}>Herbs</button>
                    <button className="choose-buttons" onClick={getVeggies}>Vegetables</button>
                </div>
                <div className='plantData'>
                    {herbsMapped}
                    {veggiesMapped}
                </div>
                <MyGarden gardenArr={this.state.gardenArr}
                removeFunction={this.removeFromGarden}/>
            </div>
         )
     }
}

export default Choose;

//we are going to map over our arrays and display them between our herb and vegetable components.
// Need to pass down arrays from app.js via props