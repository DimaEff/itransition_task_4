import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

import AppRouter from "./AppRouter";


const useAppRouter = (routes, params) => {
    const {pathname} = useLocation();
    const [withoutElement, setWithoutElement] = useState(false);

    useEffect(() => {
        const res = routes
            .filter(route => route.withoutElement)
            .some(route => route.path.split('/')[1] === pathname.split('/')[1]);
        setWithoutElement(res);
    }, [pathname]);


    const Router = () => <AppRouter routes={routes} {...params}/>

    return {Router, withoutElement};
};

export default useAppRouter;