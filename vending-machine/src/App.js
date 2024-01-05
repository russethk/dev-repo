import React from "react";
import { Route } from "react-router-dom";
import NavBar from "./NavBar";
import VendingMachine from "./VendingMachine";
import Chips from "./Chips";
import Soda from "./Soda";
import Candy from "./Candy";


const App = props => (
  <div>
    <NavBar />  
    <Route path="/" exact component={VendingMachine} />
    <Route path="/chips" exact component={Chips} />
    <Route path="/soda" exact component={Soda} />
    <Route path="/candy" exact component={Candy} />
  </div>
);

export default App;

