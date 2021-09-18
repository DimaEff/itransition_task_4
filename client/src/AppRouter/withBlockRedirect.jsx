import React from 'react';
import {Redirect} from 'react-router-dom';


const withBlockRedirect = (Component, {user}) => {

    return (props) => {
        if (user?.isBlocked) return <Redirect to={'/'}/>;

        return <Component {...props}/>;
    };
};

export default withBlockRedirect;