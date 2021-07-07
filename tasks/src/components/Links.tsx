import React from "react";
import {Link } from "react-router-dom";
import './Page.css'
 function Links() {

     return (
       <div className="root">
         <div>
           <h1 className="h1">HEADER PAGE</h1>
         </div>
         <Link  to="/bar"><button className="link">
          BAR</button></Link>
          <Link  to="/line"><button className="link">
          LINE</button></Link>
          <Link  to="/area"><button className="link">
          AREA</button></Link>
          <Link  to="/pie"><button className="link">
          PIE</button></Link>
          <Link  to="/stocks"><button className="link">
          STOCKS</button></Link>
       </div>
     );
 }

 export default Links;