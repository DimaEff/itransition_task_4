import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";

import withAuthRedirect from "./withAuthRedirect";
import withBlockRedirect from "./withBlockRedirect";


const AppRouter = ({routes, redirectPath = '/', ...props}) => {
    const getRoute = (path, exact, component) => <Route key={path} exact={exact} path={path} component={component}/>;

    const appRoutes = routes.map(route => {
            let component = route.Component;

            if (route.withAuth) component = withAuthRedirect(component, {...props});
            if (route.withBlock) component = withBlockRedirect(component, {...props});


            return getRoute(route.path, route.exact, component);
        });

    return (
        <Switch>
            {appRoutes}
            <Redirect to={redirectPath}/>
        </Switch>
    );
};

export default React.memo(AppRouter);