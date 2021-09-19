import React from "react";
import {Grid} from "antd";
import 'antd/dist/antd.css';

import styles from './App.module.scss';
import useAppRouter from './AppRouter';
import routes from "./routes";
import useOnAuthChanged from "./hooks/useOnAuthChanged";
import useSubscribeUsers from "./hooks/useSubscribeUsers";
import Header from "./components/Header";


export const UserContext = React.createContext({});

function App() {
    const users = useSubscribeUsers();
    const {currentUser, token} = useOnAuthChanged(users);

    const {Router} = useAppRouter(routes, {user: currentUser});
    console.log('app')

    return (
        <UserContext.Provider value={{currentUser, users, token}}>
            <Header/>
            <div className={styles.contentWrapper}>
                <Router/>
            </div>
        </UserContext.Provider>
    );
}

export default React.memo(App);