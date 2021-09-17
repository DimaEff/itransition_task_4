export const createUserObject = ({additionalUserInfo, credential, user}) => {
    return {
        uid: user.uid,
        displayName: user.displayName || additionalUserInfo.username,
        signInMethod: credential.signInMethod,
        creationTime: user.metadata.creationTime,
        lastSignInTime: user.metadata.lastSignInTime,
        isBlocked: false,
    };
};

export const getUsersId = (users) => {
    return users.map(user => user.uid);
}