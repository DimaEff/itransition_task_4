import {useEffect, useState} from "react";

import {auth} from "../firebaseAPI/config";


const useOnAuthChanged = () => {
    const [currentUser, setCurrentUser] = useState(null);
    const [token, setToken] = useState('');

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            user?.getIdToken().then(t => {setToken(t)});
        })
    }, [])

    return {currentUser, token};
}

export default useOnAuthChanged;