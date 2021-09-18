import React from 'react';
import {Redirect} from 'react-router-dom';


const withAuthRedirect = (Component, {user}) => {

    return (props) => {
        if (!user) return <Redirect to={'/'}/>;

        return <Component {...props}/>;
    };
};

export default withAuthRedirect;