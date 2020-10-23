import React, { Component } from 'react'
import { Line } from 'react-chartjs-2';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

export default class EventHandeler extends Component {

    Test = () => {
        console.log('The Test');
    }
    render() {
        return (
            <div>
                <Link to="/chart2">
                    <button renderAs="button">
                        <span>Click To redirect</span>
                    </button>
                </Link>
            </div>
        )
    }
}


// import React from 'react'

// function EventHandeler() {

//     function Test (){
//         console.log(`from the fun`)

//     }
//     return (
//         <div>
//             <button onClick={Test}>Click</button>
//         </div>
//     )
// }

// export default EventHandeler

