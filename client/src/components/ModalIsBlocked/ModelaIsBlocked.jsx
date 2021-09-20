import React from 'react';
import {Modal, Typography} from "antd";


const ModalIsBlocked = ({currentUser}) => {
    return (
        <Modal title={<Typography.Text type={"danger"}>Your account is blocked</Typography.Text>}
               visible={currentUser?.isBlocked}
               centered
               footer={[]}
               closable={false}
        />
    );
};

export default ModalIsBlocked;