import React, {Component} from 'react';

class MyGarden extends Component {
    constructor(props) {
        super(props);
    } 


    render() {
        const {gardenArr} = this.props;
        const myGarden = gardenArr.map((obj, i) => {
           return(
               <div key={i} className="planted">
                   <img src={obj.image} className="plantedImg"/>
                    <div className="plantedText">{`${obj.name}`}</div>
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