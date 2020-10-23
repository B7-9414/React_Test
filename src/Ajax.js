import { ajax } from 'rxjs/ajax'
import React, { Component } from 'react'

class Ajax extends Component {    
   
    state = {
        Data: [ ]
    }

    Api() {
        ajax.getJSON("http://dummy.restapiexample.com/api/v1/employees").subscribe(data => {
            console.log(data);
            this.setState({
                Data: data
            })
        })
    }
        render() {
            const { Data } = this.state;
            const List = Data.length ? (
                Data.map(da => {
                    return (
                        <div className="post card" key={da.id}>
                            <div className="card-content">
                                <span className="card-title">{da.employee_name}</span>

                            </div>
                        </div>
                    )
                })
            ):(
                <div></div>
            )
        return (
        <div>
            <h4>
                {List}
            </h4>
        </div>
    )
}
}

export default Ajax
