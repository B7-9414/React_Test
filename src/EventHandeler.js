import React, { Component } from 'react'
import { Line } from 'react-chartjs-2';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class EventHandeler extends Component {

    Test = () => {
        console.log('The Test');
    }
    render() {
        return (
            <div>
                <Link to="/chart2">
                    <Button className="btn btn-success" renderAs="button">
                        <span>Click To redirect</span>
                    </Button>
                </Link>

                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
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

