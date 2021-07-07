import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';
import './Page.css'

function Page1() {
  const data =[
    { name:"facebook", value:20000000  },
    { name:"instagram", value:2005220  },
    { name:"twitter", value:30000000  },
    { name:"telegram", value:40000000  }
]
     return (
       <React.Fragment>
         <h1 className="h1">BAR CHART</h1>
        <BarChart
          width={1500}
          height={600}
          data={data}
          margin={{
            top: 50,
            right: 100,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="value" fill="#8884d8" background={{ fill: '#eee' }} />
        </BarChart>
       </React.Fragment>
     );

 }

 export default Page1;