import React, {Component} from 'react';

class MyGarden extends Component {
    constructor(props) {
        super(props);
    } 


    render() {
        //console.log(this.props.gardenArr);
        const {gardenArr} = this.props;
        const myGarden = gardenArr.map((obj, i) => {
           return(
               <div key={i} className="planted">
                   <img src={obj.image} className="plantedImg"/>
                    <div className="plantedText">{`${obj.name}`}</div>
                    <button>Type/Use</button>
                    <button onClick={() => this.props.removeFunction()}>Remove</button>
               </div>
           )
        })
        return(
            <div className="myGardenBox">
                <section className="gardenBox">
                    {myGarden}
                </section>
            </div>
        )
    }
}

export default MyGarden;