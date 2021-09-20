import React from "react";
import 'antd/dist/antd.css';

import styles from './App.module.scss';
import useAppRouter from './AppRouter';
import routes from "./routes";
import useOnAuthChanged from "./hooks/useOnAuthChanged";
import useSubscribeUsers from "./hooks/useSubscribeUsers";
import Header from "./components/Header";
import ModalIsBlocked from "./components/ModalIsBlocked";


export const UserContext = React.createContext({});

function App() {
    const users = useSubscribeUsers();
    const {currentUser, token} = useOnAuthChanged(users);

    const {Router} = useAppRouter(routes, {user: currentUser});

    return (
        <UserContext.Provider value={{currentUser, users, token}}>
            <ModalIsBlocked currentUser={currentUser}/>
            <Header />
            <div className={styles.contentWrapper}>
                <Router/>
            </div>
        </UserContext.Provider>
    );
}

export default React.memo(App);