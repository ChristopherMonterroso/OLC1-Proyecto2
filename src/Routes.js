import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EditorPage from "./pages/EditorPage";
import ReportPage from "./pages/ReportsPage";
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
                 
            </Route>
            <Route exact path="/Reports">
                <ReportPage />
            </Route>
        </Switch>
    );
};

export default Routes;