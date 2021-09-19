import {signInMethods} from "./consts";


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

export const getUsersBySignInMethods = (users) => {
    const usersBySignInMethods = {};

    users.forEach(user => {
        const signInMethodUser = usersBySignInMethods[getSignInMethodTitle(user.signInMethod)];

        if (signInMethodUser) {
            signInMethodUser.push(user);
        } else {
            usersBySignInMethods[getSignInMethodTitle(user.signInMethod)] = [user];
        }
    })

    return usersBySignInMethods;
}

export const getSignInMethodTitle = (method) => {
    const sim = method.split('.')[0];

    return signInMethods[sim];
}