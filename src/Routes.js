import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EditorPage from "./pages/EditorPage";
const Routes = () => {
    return (
        <Switch>
            <Route exact path="/Home">
                <HomePage />
            </Route>
            <Route exact path="/Editor">
                <EditorPage />
            </Route>
            <Route exact path="/Compiler">
                <h1>Compilador</h1>
            </Route>
            <Route exact path="/Reports">
                <h1>Reportes</h1>
            </Route>
        </Switch>
    );
};

export default Routes;