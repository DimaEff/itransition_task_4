import {useEffect, useState} from "react";

import {usersCollection} from "../firebaseAPI/collections";


const useSubscribeUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const unsubscribe = usersCollection
            .onSnapshot(async (snapshot) => {
                const usersData = snapshot.docs.map(doc => doc.data());

                setUsers(usersData);
            });

        return unsubscribe;
    }, [])


    return users;
}

export default useSubscribeUsers;