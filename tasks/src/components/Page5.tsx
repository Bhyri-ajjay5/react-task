import React from "react";
import './Page.css'
import {BarChart,XAxis,YAxis,Bar,Tooltip} from 'recharts'
function Page5() {
    const data = [
        {name: 'twitter', completed: 230, failed: 335, inprogress: 453,value:1000},
        {name: 'facebook', completed: 335, failed: 330, inprogress: 345,value:2000},
        {name: 'instagram', completed: 537, failed: 243, inprogress: 2110,value:3000},
        {name: ' Paytm', completed: 132, failed: 328, inprogress: 540,value:4000},
        {name: 'whatsapp', completed: 530, failed: 145, inprogress: 335,value:5000},
        {name: 'telegram', completed: 538, failed: 312, inprogress: 110,value:6000}
    ];
     return (
       <React.Fragment>
           <h1 className="h1">STOCK CHART</h1>
            <BarChart layout="vertical" 
            width={1500}
            height={600}
            data={data} 
            margin={{left: 0, right: 5}} 
            stackOffset="expand">
                    <XAxis  type="number"/>
                    <YAxis type="category" 
                    dataKey="value" 
                    stroke="#FFFFFF" 
                    fontSize="12" />
                    <Tooltip/>
                    <Bar dataKey="value" fill="#8884d8" background={{ fill: '#eee' }} />
                    <Bar dataKey="failed" fill="#dd7876" stackId="a"  />
                    <Bar dataKey="completed" fill="#82ba7f" stackId="a"  />
                    <Bar dataKey="inprogress" fill="#76a8dd" stackId="a"  />
                </BarChart>
       </React.Fragment>
     );
 }

 export default Page5;