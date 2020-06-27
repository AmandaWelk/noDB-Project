import React, {Component} from 'react';
import Herbs from './Herbs';
import Vegetables from './Vegetables'; 

class Choose extends Component {
    constructor() {
        super();
    }

    render() {
        const {getHerbs, getVeggies} = this.props;
        return(
             <div>
                <button className="choose-buttons" onClick={getHerbs}>Herbs</button>
                <button className="choose-buttons" onClick={getVeggies}>Vegetables</button>
            </div>
         )
     }
}

export default Choose;

//we are going to map over our arrays and display them between our herb and vegetable components. Need to pass down arrays from app.js via props