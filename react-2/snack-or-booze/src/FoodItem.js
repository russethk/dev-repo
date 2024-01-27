import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

/* This component displays a single food item. 
  
      Props:
        items: an array of food items
        cantFind: the path to redirect to if the item is not found
  
      State:
        None
  */

function FoodItem({ items, cantFind }) {
  const { id } = useParams();

  let snack = items.find(snack => snack.id === id);
  if (!snack) return <Redirect to={cantFind} />;
  
  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {snack.name}
          </CardTitle>
          <CardText className="font-italic">{snack.description}</CardText>
          <p>
            <b>Recipe:</b> {snack.recipe}
          </p>
          <p>
            <b>Serve:</b> {snack.serve}
          </p>
        </CardBody>
      </Card>
    </section>
  );
}

export default FoodItem;
