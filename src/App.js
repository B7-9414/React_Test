import React from 'react'
import Item from './Item'
import Test from './Test'
import FetchRandomUser from './FetchRandomUser'
import DyChartjs from './DyChartjs'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Charttt from './Charttt'
import EventHandeler from './EventHandeler'
import Ajax from './Ajax'


class App extends React.Component {
  /*
    test = {
      info: [
        {
        name: 'Sid',
        age: 24
        }
      ]
    }
  */
  render() {
    // we are passing the jeson to Item Component         <Item infos={this.test.info}/>

    return (
      <React.Fragment>

      <React.Fragment>
      
        <div class="btn-group">
          <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Action
  </button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Separated link</a>
          </div>
        </div>
      </React.Fragment>
        <React.Fragment>
        <Router>
          <div>
            <Switch>
              <Route path="/" exact><DyChartjs /><Item /> <Test /><FetchRandomUser /><EventHandeler /></Route>
              <Route path="/welcome" exact><Test /></Route>
              <Route path="/user" exact><FetchRandomUser /></Route>
              <Route path="/chart"><DyChartjs /></Route>
              <Route path="/chart2"><Charttt /></Route>
              <Route path="/ajax"><Ajax /></Route>
              <Route path="/event"><EventHandeler /></Route>

            </Switch>
          </div>
        </Router >
        </React.Fragment>
      </React.Fragment>
      // <div>
      //   <Item />
      //   {/* <Item infos={test.info}/> */}
      //   <Test />
      //   <FetchRandomUser />
      //   <DyChartjs />
      // </div>
    )
  }
}

export default App

