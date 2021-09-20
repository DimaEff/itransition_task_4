import {auth} from "./config";
import {createUserObject} from "../utils/helpers";
import {
    addNewUser,
    deleteUserFromFirebase,
    deleteUsersFromAuth,
    setIsBlockedUserStatus, setLastSignInTime,
    signOutAPI
} from "./api";


export const signIn = async (provider) => {
    const user = await auth.signInWithPopup(provider);
    const uid = user.user.uid;

    if (user.additionalUserInfo.isNewUser) {
        const userData = createUserObject(user);
        await addNewUser(uid, userData);
    }

    await setLastSignInTime(uid, user.user.metadata.lastSignInTime);
}

export const signOut = async () => {
    await signOutAPI();
}

export const setIsBlockedUsersStatus = async (usersId, isBlocked) => {
    await Promise.all([...usersId.map(uid => setIsBlockedUserStatus(uid, isBlocked))]);
}

export const deleteUsers = async (token, usersId) => {
    await Promise.all([
        deleteUsersFromAuth(token, usersId),
        ...usersId.map(uid => deleteUserFromFirebase(uid))
    ]);

}