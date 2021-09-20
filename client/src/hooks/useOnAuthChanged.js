import {useEffect, useState} from "react";

import {auth} from "../firebaseAPI/config";
import {getUserData} from "../firebaseAPI/api";


const useOnAuthChanged = (users) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [token, setToken] = useState(null);

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (!user) {
                setCurrentUser(null);
                setToken(null);
                return
            }

            const userData = await Promise.all([getUserData(user.uid), user?.getIdToken()])
            setCurrentUser(userData[0]);
            setToken(userData[1]);
        })
    }, [users])


    return {currentUser, token};
}

export default useOnAuthChanged;