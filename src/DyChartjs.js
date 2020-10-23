import React, { useState, useEffect } from "react";
import { Polar   } from "react-chartjs-2";
import axios from "axios";

const DyChartjs = () => {
  const [chartData, setChartData] = useState({});
 
  const chart = () => {
    let active = [];
    let deaths = [];
    let recovered = [];
    let cases = [];


    axios.get("http://dummy.restapiexample.com/api/v1/employees")
      .then(res => {
        console.log(res.data);
        for (const dataObj of res.data.data) {
          active.push(parseInt(dataObj.id));
          deaths.push(parseInt(dataObj.employee_age));
          recovered.push(parseInt(dataObj.employee_salary));
          cases.push(parseInt(dataObj.employee_age));

        }
        setChartData({
          labels: ['active', 'deaths', 'recovered', 'cases'],
          datasets: [
            {
              label: "COVID19",
              data: [active[0],deaths[0],recovered[0],cases[0]],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
               
              ],
              borderWidth: 1
            }
          ]
        });
      })
      .catch(err => {
        console.log(err);
      });
    console.log(cases, deaths,recovered,cases);
  };

  useEffect(() => {
    chart();
  }, []);
  return (
    <div className="App">
      <h1>COVID19 API</h1>
      <div>
        <Polar  
          data={chartData}
         
        />
      </div>
    </div>
  );
};

export default DyChartjs;