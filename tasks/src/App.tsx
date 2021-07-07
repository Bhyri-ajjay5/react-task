import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Page1 from "./components/Links";
import Page2 from "./components/Page1";
import Page3 from './components/Page2';
import Page4 from './components/Page3';
import Page5 from './components/Page4';
import Page6 from './components/Page5';
function App() {
  return (
    <div>
       <BrowserRouter>
       <Switch>
        <Route exact path="/" component={Page1} />
        <Route path="/bar" component={Page2} />
        <Route path="/line" component={Page3} />
        <Route path="/area" component={Page4} />
        <Route path="/pie" component={Page5} />
        <Route path="/stocks" component={Page6} />
      </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App

