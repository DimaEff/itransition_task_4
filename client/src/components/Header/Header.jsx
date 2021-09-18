import React, {useContext} from 'react';
import {PageHeader, Typography} from "antd";

import styles from './Header.module.scss';
import {UserContext} from "../../App";
import SignInMethods from "./SignInMethods";
import SignOut from "./SignOut";
import Links from "./Links";


const Header = () => {
    const {currentUser} = useContext(UserContext);

    return (
        <>
            <PageHeader
                className={styles.header}
                title={<Typography.Title level={3}>itr4</Typography.Title>}
                subTitle={<Links />}
                extra={[
                    currentUser ? <SignOut currentUser={currentUser}/>: <SignInMethods />,
                ]}
            />
        </>
    );
};

export default Header;