import React from 'react';
import { Line } from 'react-chartjs-2';

var numVal = [];
const state = {
  labels: [
    'January', 'February', 'March','April', 'May'
  ],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 2,
      data: [numVal, 59, 70, 81, 56]
    }
  ]
}


class Chartjs extends React.Component {
  
// test = {
//   info: [
//     {
//       loading: true,
//       person: null
//     }
//   ]
// }
    feac () {
        fetch('https://corona.lmao.ninja/v2/all')
        .then(response => response.json())
        .then(data => {
          return data.active; 
        })
        numVal.push(this.props.val);
        console.log('=========>:' + numVal);
       
    } 

    // async componentDidMount() {
    //   const url = "https://api.randomuser.me/";
    //   const response = await fetch(url);
    //   const data = await response.json();
    //   this.setState({ person: data.results[0], loading: false });
    // }

  render() {
    // if (this.test.info.loading) {
    //   return <div>loading...</div>;
    // }

    // if (!this.test.info.person) {
    //   return <div>didn't get a person</div>;
    // }
    return (
      <div>
{/*      
      <div>
       <div>{this.test.info.person.name.title}</div>
       <div>{this.test.info.person.name.first}</div>
       <div>{this.test.info.person.name.last}</div>
     </div> */}
        <h1>{this.feac()}</h1>
        <hr />
        <h3>Pass the val: {this.props.val}</h3>
        <hr />
        <Line
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:15
            },
            legend:{
              display:false,
              position:'right'
            }
          }}
        />
        <hr />
      </div>
      
    );
  }
}

export default Chartjs
