import React, {useContext} from 'react';

import {UserContext} from "../../App";
import UsersTable from '../../components/UsersTable';


const Users = () => {
    const userData = useContext(UserContext);

    return (
        <div>
            <UsersTable {...userData}/>
        </div>
    );
};

export default Users;