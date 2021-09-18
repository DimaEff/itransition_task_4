import React from "react";
import {NavLink} from "react-router-dom";
import 'antd/dist/antd.css';

import useAppRouter from './AppRouter';
import routes from "./routes";
import {providers} from "./firebaseAPI/config";
import {signIn, signOut, deleteUsers, setIsBlockedUsersStatus} from './firebaseAPI';
import useOnAuthChanged from "./hooks/useOnAuthChanged";
import useSubscribeUsers from "./hooks/useSubscribeUsers";
import Header from "./components/Header/Header";


export const UserContext = React.createContext({});

function App() {
    const users = useSubscribeUsers();
    const {currentUser, token} = useOnAuthChanged(users);
    const testUsers = [currentUser];

    const usersComp = <div>
        <ul>
            {users.map(u => <li>{u.displayName}</li>)}
        </ul>
    </div>

    const {Router} = useAppRouter(routes, {user: currentUser});
    console.log('app')

    return (
        <UserContext.Provider value={{currentUser, users}}>
            <div>
                <Header />
                <Router />
                <div>
                    {routes.map(({path}) => <NavLink key={path} to={path}>
                        {path}
                    </NavLink>)}
                </div>
                {currentUser?.displayName || 'null'}
                <button onClick={() => signIn(providers.facebook)}>
                    sign in with facebook
                </button>
                <button onClick={() => signIn(providers.google)}>
                    sign in with google
                </button>
                <button onClick={() => signIn(providers.github)}>
                    sign in with github
                </button>
                <button onClick={signOut}>
                    exit
                </button>
                <button onClick={() => deleteUsers(token, [{uid: 'IroXAch92wP8Z3oGwAI9Oq0Kk2z1'}], currentUser)}>
                    delete me
                </button>
                <button onClick={() => setIsBlockedUsersStatus(testUsers, true)}>
                    block me
                </button>
                <button onClick={() => setIsBlockedUsersStatus(testUsers, false)}>
                    unblock me
                </button>
            </div>
        </UserContext.Provider>
    );
}

export default App;