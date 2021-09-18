import React, {useState} from "react";

import {providers} from "./firebaseAPI/config";
import {signIn, signOut, deleteUsers, setIsBlockedUsersStatus} from './firebaseAPI';
import useOnAuthChanged from "./hooks/useOnAuthChanged";
import useSubscribeUsers from "./hooks/useSubscribeUsers";
import {NavLink, Route, Switch} from "react-router-dom";


function App() {
    const users = useSubscribeUsers();
    const {currentUser, token} = useOnAuthChanged(users);
    const testUsers = [currentUser];

    const usersComp = <div>
        <ul>
            {users.map(u => <li>{u.displayName}</li>)}
        </ul>
    </div>

    console.log('app')

    return (
        <div>
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
            <div>
                <NavLink to={'/users'}>
                    users
                </NavLink>
            </div>
            <Switch>
                <Route path={'/users'} render={() => usersComp} />
            </Switch>
        </div>
    );
}

export default App;