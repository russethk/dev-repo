import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../homepage/Homepage";
import Game from "../game/Game";
import PokemonList from "../pokedex/PokemonList";
import ProfileForm from "../profiles/ProfileForm";
import LoginForm from "../auth/LoginForm";
import SignupForm from "../auth/SignupForm";
import PrivateRoute from "./PrivateRoute";

function Routes({ login, signup }) {
    console.debug(
        "Routes",
        `login=${typeof login}`,
        `register=${typeof register}`,
    );

    return (
        <div className="pt-4">
         <Switch>
            <Route exact path="/">
                <Home />
            </Route>

            <Route exact path="/login">
                <LoginForm login={login} />
            </Route>

            <Route exact path="/signup">
                <SignupForm signup={signup} />
            </Route>

            <Route path="/game">
                <Game />
            </Route>

            <Route path="/pokedex">
                <PokemonList />
            </Route>
            
            <PrivateRoute path="/profile">
                <ProfileForm />
            </PrivateRoute>

          </Switch>
        </div>
    );
}
export default Routes;