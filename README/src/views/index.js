import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import { routes } from "./routes";
import ProtectedRoute from "../utils/protectedRoutes";

const Home = () => {
    return (
        <Router>
            <Switch>
                {routes.map((data, index) => {
                    return (
                        data.notProtected ?
                            <Route key={index} component={data.component} exact={data.exact} path={data.path} />
                            : <ProtectedRoute path={data.path} component={data.component} key={data.key}/>
                    )
                })
                }
            </Switch>
        </Router>
    )
}

export default Home


