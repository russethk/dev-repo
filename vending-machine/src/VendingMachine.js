import React from "react";
import { Link } from "react-router-dom";
import Message from "./Message";
import "./VendingMachine.css";
import machine from "./img/vending-machine.jpg";

const VendingMachine = () => (
  <div
    className="VendingMachine"
    style={{ backgroundImage: `url(${machine})` }}
  >
     <Message>
        <h1>hello. what would you like to eat?</h1>
    </Message>
    <div className="VendingMachine-links">
    <Message>
    <h1>
        <Link to="/chips">chips</Link>
      </h1>
      <h1>
        <Link to="/soda">soda</Link>
      </h1>
      <h1>
        <Link to="/candy">candy</Link>
      </h1>
    </Message>
    </div>
  </div>
);

export default VendingMachine;