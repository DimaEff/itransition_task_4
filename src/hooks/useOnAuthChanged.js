import {useEffect, useState} from "react";

import {auth} from "../firebase";


const useOnAuthChanged = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            setUser(user)
        })
    }, [setUser])

    return user;
}

export default useOnAuthChanged;