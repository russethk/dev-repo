/* App Component - renders the navbar and routes for the site.
  * 
  * App -> NavBar
  * App -> Routes -> { Home, Menu, Snack, ItemForm, Contact }
  * 
  * App is rendered by index.js
  * 
  *
  * State:
  * - snacks: array of snack objects like { name, description, recipeUrl, id }
  * - drinks: array of drink objects like { name, description, recipeUrl, id }
  * 
  * App will fetch data from API on mount and set to state.
  * 
  * App will render a NavBar and Routes.
  * 
  * Routes will render Home, Menu, Snack, ItemForm, or Contact components.
  */  

import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import ItemForm from './ItemForm';
import Contact from './Contact';
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Menu from "./FoodMenu";
import Snack from "./FoodItem";
import NotFound from './404';


function App() {
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  // Get snacks and drinks from API on mount and set to state.
  
  useEffect(() => {
    async function getSnacks() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      setSnacks(snacks);
    }
    getSnacks();
  }, []);

  useEffect(() => {
    async function getDrinks() {
      let drinks = await SnackOrBoozeApi.getDrinks();
      setDrinks(drinks);
    }
    getDrinks();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home snacks={snacks} drinks={drinks} />
            </Route>
            <Route exact path="/snacks">
              <Menu snacks={snacks} title="Snacks" />
            </Route>
            <Route path="/snacks/:id">
              <Snack items={snacks} cantFind="/snacks" />
            </Route>
            <Route exact path="/drinks">
              <Menu drinks={drinks} title="Drinks" />
            </Route>
            <Route path="/drinks/:id">
              <Snack items={drinks} cantFind="/drinks" />
            </Route>
            <Route exact path="/add">
              <ItemForm />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/*">
							<NotFound />
						</Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );

}

export default App;