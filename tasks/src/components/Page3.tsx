import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,} from 'recharts';
import './Page.css'
function Page3() {
    const data =[
        { name:"facebook", value:20000000  },
        { name:"instagram", value:2005220  },
        { name:"twitter", value:30000000  },
        { name:"telegram", value:40000000  }
    ]
     return (
      <React.Fragment>
         <h1 className="h1">AREA CHART</h1>
            <AreaChart
          width={1500}
          height={600}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 30,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
       
      </React.Fragment>
     );

 }

 export default Page3;