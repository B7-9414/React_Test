import React, { Component } from 'react'
import propTypes from 'prop-types';
import Chartjs from './Chartjs';

class Item extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {num: 10};
    // }
    test = {
        info: [
          {
          name: 'Bassam',
          age: 26
          }
        ]
      }

      
    state = {
        value : 10
    }
    
    Test = () => {
        
        for (var i =0; i <= 3; i++) {
            //return  [this.props.infos[i].age, this.props.infos[i].name]
            return  ['User : ' + this.test.info[i].name, " " , this.test.info[i].age]

        }
    }

    handleChange = (e) =>{ 
        this.setState({value: e.target.value});
      }

    render() {
        /*
            return this.props.infos.map((info) => (
            <h1>{info.name} {info.age}</h1>
            ));
        
        }
        }
        */
        /*
            // we are got the data (jeson) from app Component
            return (
            <h1>{this.props.infos[0].name}  {this.props.infos[0].age}</h1>
            );
        }
         }
        
         */

            return (
            <div>
                <h1>{this.Test()}</h1><br/> 
                <Chartjs val={this.state.value}/>
                <input type="text" value={this.state.value} onChange={this.handleChange}/>
                <div>{this.state.value}</div>
            
            </div>

            );
        }
    }

    Item.propTypes = {
        infos: propTypes.object.isRequired
    }

    export default Item
