import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Homepage from "../homepage/Homepage";
import Game from "../game/Game";
import PokemonList from "../pokedex/PokemonList";
import LoginForm from "../auth/LoginForm";
import SignupForm from "../auth/SignupForm";
import ProfileForm from "../profiles/ProfileForm";
import PrivateRoute from "./PrivateRoute";

/** Site-wide routes
 * 
 * Parts of the site should only be visitable when logged in.
 * 
 * Visitable by anyone:
 * - /login
 * - /signup
 * - /
 *  
 * Visitable only when logged in:
 * - /game
 * - /pokedex
 * - /profile
 *  
 * Routed at /:
 * - Homepage
 * - Game
 * - PokemonList
 * - LoginForm
 * - SignupForm
 * - ProfileForm
 * 
 * App -> Routes
 * 
 * */

function Routes({ login, signup, editProfile }) {
  console.debug(
    "Routes",
    `login=${typeof login}`,
    `register=${typeof register}`,
    `editProfile=${typeof editProfile}`
  );
  
  return (
    <BrowserRouter >
            <Route exact path="/">
                <Homepage />
            </Route>
    
            <Route exact path="/login">
                <LoginForm login={login} />
            </Route>
    
            <Route exact path="/signup">
                <SignupForm signup={signup} />
            </Route>
    
            <PrivateRoute exact path="/game">
                <Game />
            </PrivateRoute>
    
            <PrivateRoute exact path="/pokedex">
                <PokemonList />
            </PrivateRoute>
    
            <PrivateRoute exact path="/profile">
                <ProfileForm />
            </PrivateRoute>
    
            <Redirect to="/" />
    </BrowserRouter>
  );
}

export default Routes;