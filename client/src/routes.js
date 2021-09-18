import {getHomeRoute, getUsersRoute} from "./routesPaths";
import Home from './pages/Home';
import Users from './pages/Users';


const appRoutes = [
    {
        name: 'Home',
        path: getHomeRoute(),
        Component: Home,
        exact: true,
    },
    {
        name: 'Users',
        path: getUsersRoute(),
        Component: Users,
        withAuth: true,
        withBlock: true,
    },
];

export default appRoutes;