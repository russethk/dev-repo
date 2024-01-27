/* Home function displays Home Page introduction 
* and number of snacks and drinks available
* with data from props that are passed in from App.js
*/

import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import "./Home.css";

function Home( {snacks, drinks} ) {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Central Florida's premier cafe
            </h3>
            <p className="lead">We serve only the finest snacks and drinks</p>
            <p>
							There are {snacks.length} snacks and {drinks.length} drinks to choose from!
						</p>
          </CardTitle>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
