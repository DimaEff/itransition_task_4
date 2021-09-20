import {auth} from "./config";
import {createUserObject} from "../utils/helpers";
import {
    addNewUser,
    deleteUserFromFirebase,
    deleteUsersFromAuth,
    setIsBlockedUserStatus,
    signOutAPI
} from "./api";


export const signIn = async (provider) => {
    const user = await auth.signInWithPopup(provider);
    const uid = user.user.uid;

    if (user.additionalUserInfo.isNewUser) {
        const userData = createUserObject(user);
        await addNewUser(uid, userData);
    }
}

export const signOut = async () => {
    await signOutAPI();
}

export const setIsBlockedUsersStatus = async (usersId, isBlocked) => {
    await Promise.all([...usersId.map(uid => setIsBlockedUserStatus(uid, isBlocked))]);
}

export const deleteUsers = async (token, usersId, currentUser) => {
    // if (usersId.some(uid => uid === currentUser?.uid)) await signOut();

    await Promise.all([
        deleteUsersFromAuth(token, usersId),
        ...usersId.map(uid => deleteUserFromFirebase(uid))
    ]);

}