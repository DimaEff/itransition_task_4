import React, {useState} from 'react';
import {Button, Space, Table} from "antd";
import {DeleteFilled} from '@ant-design/icons';

import {createTableUserObject} from '../../utils/helpers'
import {signInMethods} from "../../utils/consts";
import {deleteUsers, setIsBlockedUsersStatus} from "../../firebaseAPI";


const sortStringValues = (fieldName) => (a, b) => {
    return a[fieldName].localeCompare(b[fieldName]);
};

const onFilter = (fieldName) => (value, item) => item[fieldName].includes(value);

const UsersTable = ({users, token}) => {
    const tableUsers = users.map(createTableUserObject);
    const columns = [
        {
            title: 'uid',
            dataIndex: 'uid',
            key: 'uid',
        },
        {
            title: 'Name',
            dataIndex: 'displayName',
            key: 'displayName',
            sorter: sortStringValues('displayName'),
        },
        {
            title: 'Sign In method',
            dataIndex: 'signInMethod',
            key: 'signInMethod',
            filters: Object.values(signInMethods).map(method => ({text: method, value: method})),
            onFilter: onFilter('signInMethod'),
        },
        {
            title: 'Creation Time',
            dataIndex: 'creationTime',
            key: 'creationTime',
            sorter: sortStringValues('creationTime'),
        },
        {
            title: 'Last Sign In Time',
            dataIndex: 'lastSignInTime',
            key: 'lastSignInTime',
            sorter: sortStringValues('lastSignInTime'),
        },
        {
            title: 'Is blocked',
            dataIndex: 'isBlocked',
            key: 'isBlocked',
            filters: [
                {
                    text: 'yes',
                    value: 'yes',
                },
                {
                    text: 'no',
                    value: 'no',
                },
            ],
            onFilter: onFilter('isBlocked'),
        },
    ];

    const [selectedUserKeys, setSelectedUserKeys] = useState([]);
    const isDisableButton = selectedUserKeys.length === 0;

    const rowSelection = {
        onChange: (selectedRowKeys) => {
            setSelectedUserKeys(selectedRowKeys);
        },
    };

    const buttons = [
        {
            child: 'Block',
            onClick: () => setIsBlockedUsersStatus(selectedUserKeys, true),
        },
        {
            child: 'Unblock',
            onClick: () => setIsBlockedUsersStatus(selectedUserKeys, false),
        },
        {
            child: <DeleteFilled/>,
            onClick: () => deleteUsers(token, selectedUserKeys),
            danger: true,
        },
    ];

    return (
        <div>
            <Space size={'middle'}>
                {
                    buttons.map(button => <Button disabled={isDisableButton}
                                                  type={'primary'}
                                                  {...button}
                    >
                        {button.child}
                    </Button>)
                }
            </Space>
            <Table
                dataSource={tableUsers}
                columns={columns}
                rowSelection={{
                    type: 'checkbox',
                    ...rowSelection,
                }}
            />;
        </div>
    );
};

export default UsersTable;
