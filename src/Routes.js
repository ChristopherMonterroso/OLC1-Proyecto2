import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EditorPage from "./pages/EditorPage";
import ReportPage from "./pages/ReportsPage";
import TreePage from "./pages/TreePage";
import SimbolosPage from "./pages/simbolos";
const Routes = () => {
    return (
        <Switch>
            <Route exact path="/Home">
                <EditorPage />
            </Route>
            <Route exact path="/Simbolos">
                <SimbolosPage />
            </Route>
            <Route exact path="/Arbol">
                 <TreePage/>
            </Route>
            <Route exact path="/Errores">
                <ReportPage />
            </Route>
        </Switch>
    );
};

export default Routes;