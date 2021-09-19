import {useEffect, useState} from "react";

import {auth} from "../firebaseAPI/config";
import {getUserData} from "../firebaseAPI/api";


const useOnAuthChanged = (users) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [token, setToken] = useState(null);

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (!user) {
                setCurrentUser(null);
                setToken(null);
                return
            }

            getUserData(user.uid).then(userData => {
                setCurrentUser(userData)
            });
            user?.getIdToken().then(t => {
                setToken(t)
            });
        })
    }, [])

    return {currentUser, token};
}

export default useOnAuthChanged;