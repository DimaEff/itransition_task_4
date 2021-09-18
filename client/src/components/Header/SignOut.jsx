import React from 'react';
import {Space, Typography} from "antd";
import {LogoutOutlined} from "@ant-design/icons";

import styles from './Header.module.scss';
import {signOut} from "../../firebaseAPI";


const SignOut = ({currentUser}) => {
    return (
        <Space ize={'middle'} align={'start'}>
            <Typography.Title level={3}>
                {currentUser.displayName}
            </Typography.Title>
            <LogoutOutlined onClick={signOut} className={styles.icon}/>
        </Space>
    );
};

export default SignOut;