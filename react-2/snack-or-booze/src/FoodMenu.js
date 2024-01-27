import React from "react";
import { Link } from "react-router-dom";
import "./FoodMenu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";

/* This component displays a list of either snack or drink items 
    depending on the props passed in. 
    
    This was refactored from the original version, which had two separate components for snacks and drinks.
    Refactored to use one component for both food and drink menus

    Props:
      snacks: an array of snack items
      drinks: an array of drink items

    State:
      None
*/

function FoodMenu({ snacks, drinks }) {
  let items;
  let link;
  if (snacks) {
    items = snacks;
    link = 'Snacks';
  }
  else {
    items = drinks;
    link = 'Drinks'
  }
  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {link} Menu
          </CardTitle>
          <CardText>
            See all of our {link}!
          </CardText>
          <ListGroup>
            {items.map(item => (
              <Link to={`/${link}/${item.id}`} key={item.id}>
                <ListGroupItem>{item.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default FoodMenu;