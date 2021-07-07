import React from "react";
import {PieChart,Pie ,Tooltip} from 'recharts'
import './Page.css'

function Page4() {

  const data =[
    { name:"facebook", value:20000000  },
    { name:"instagram", value:2005220  },
    { name:"twitter", value:30000000  },
    { name:"telegram", value:40000000  }
]

     return (
      <React.Fragment>
          <h1 className="h1">PIE CHART </h1>
          <PieChart 
          width={1500} 
          height={600}>
        <Pie data={data}
          dataKey="value" 
          cx="50%" 
          cy="50%" 
          outerRadius={200} 
          fill="#8884d8" label
          />
          <Tooltip/>
       </PieChart>
  </React.Fragment>
     );
 }

 export default Page4;