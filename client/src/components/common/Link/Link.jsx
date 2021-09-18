import React from 'react';
import {NavLink} from "react-router-dom";

import styles from './Link.module.scss';


const Link = ({children, ...props}) => {
    return (
        <NavLink className={styles.link} {...props}>
            {children}
        </NavLink>
    );
};

export default Link;