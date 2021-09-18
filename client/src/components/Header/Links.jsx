import React from 'react';

import styles from './Header.module.scss'
import routes from "../../routes";
import {Space, Typography} from "antd";
import Link from "../common/Link/Link";


const Links = () => {
    return (
        <Space size={'middle'} align={'end'}>
            {routes.map(({path, menuName}) =>
                <Link className={styles.link} to={path}>
                    <Typography.Title level={4}>
                        {menuName}
                    </Typography.Title>
                </Link>)}
        </Space>
    );
};

export default Links;