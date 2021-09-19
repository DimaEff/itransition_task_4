import React, {useContext} from 'react';

import {UserContext} from "../../App";
import Chart from "../../components/Chart";


const Home = () => {
    const {users} = useContext(UserContext);

    return (
        <div>
            <Chart users={users}/>
        </div>
    );
};

export default React.memo(Home);