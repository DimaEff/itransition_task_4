import React from 'react';
import {Space, Typography} from "antd";
import {FacebookFilled, GithubFilled, GooglePlusSquareFilled} from "@ant-design/icons";

import styles from "./Header.module.scss";
import {signIn} from "../../firebaseAPI";
import {providers} from "../../firebaseAPI/config";


const SignInMethods = () => {
    return (
        <Space size={'middle'} align={'start'}>
            <Typography.Title level={4}>Sign In with: </Typography.Title>
            <FacebookFilled onClick={() => signIn(providers.facebook)} className={styles.icon}/>
            <GooglePlusSquareFilled onClick={() => signIn(providers.google)} className={styles.icon}/>
            <GithubFilled onClick={() => signIn(providers.github)} className={styles.icon}/>
        </Space>
    );
};

export default SignInMethods;