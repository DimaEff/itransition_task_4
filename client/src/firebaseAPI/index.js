import {auth} from "./config";
import {createUserObject, getUsersId} from "../utils/helpers";
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

export const setIsBlockedUsersStatus = async (users, isBlocked) => {
    const usersId = getUsersId(users);
    await Promise.all([...usersId.map(uid => setIsBlockedUserStatus(uid, isBlocked))]);
}

export const deleteUsers = async (token, users, currentUser) => {
    const usersId = getUsersId(users);

    if (usersId.some(uid => uid === currentUser?.uid)) await signOut();

    await Promise.all([
        deleteUsersFromAuth(token, usersId),
        ...usersId.map(uid => deleteUserFromFirebase(uid))
    ]);

}