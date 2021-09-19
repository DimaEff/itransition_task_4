import React, {useEffect, useState} from 'react';
import {Doughnut} from 'react-chartjs-2';
import randomColor from 'randomcolor'

import {getUsersBySignInMethods} from "../../utils/helpers";
import {Typography} from "antd";


const Chart = ({users}) => {
    const [data, setData] = useState({});

    useEffect(() => {
        const usersBySignInMethods = getUsersBySignInMethods(users);
        const keys = Object.keys(usersBySignInMethods);
        const values = Object.values(usersBySignInMethods);


        const charData = {
            labels: keys,
            datasets: [{
                label: 'Diagram of users by social networks',
                data: values.map(c => c.length),
                backgroundColor: keys.map(k => randomColor({luminosity: 'light',})),
                // borderWidth: 1
            }],
        };

        setData(charData)
    }, [users]);

    const options = {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Diagram of users by social networks',

            }
        }
    };

    return (
        <div>
            <Doughnut
                height={700}
                width={700}
                data={data}
                options={options}
            />
        </div>
    );
};

export default React.memo(Chart);