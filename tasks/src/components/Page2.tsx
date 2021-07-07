import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Page.css'

function Page2() {
  const data =[
    { name:"facebook", value:20000000  },
    { name:"instagram", value:2005220  },
    { name:"twitter", value:30000000  },
    { name:"telegram", value:40000000  }
]
     return (
     <React.Fragment>
       <h1 className="h1">LINE CHART</h1>
        <LineChart
      width={1500}
      height={600}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
     </React.Fragment>
     );
 }

 export default Page2;