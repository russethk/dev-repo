import React from 'react';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import DogList from './DogList';


function Routes({dogs}) {
    return (
        <Switch>
          <Route exact path="/dogs" >
            <DogList /> // what props will this need?
          </Route>
          <Route path="/dogs/:name" >
            <DogDetails /> // what props will this need?
          </Route>
          <Redirect to="/dogs" />
        </Switch>
      );
}

export default Routes;