import axios from "axios";

import {auth} from "./config";
import {usersCollection} from './collections'


const getFirebaseAdminInstance = (token) => axios.create({
    baseURL: 'https://arcane-garden-75569.herokuapp.com/api/',
    headers: {
        Authorization: `Bearer ${token}`,
    }
});

export const addNewUser = async (uid, userData) => {
    await usersCollection.doc(uid).set(userData);
}

export const setIsBlockedUserStatus = async (uid, isBlocked) => {
    await usersCollection.doc(uid).set({isBlocked}, {merge: true});
}

export const setLastSignInTime = async (uid, lastSignInTime) => {
    await usersCollection.doc(uid).set({lastSignInTime}, {merge: true});
}

export const getUserData = async (uid) => {
    const doc = await usersCollection.doc(uid).get();
    return doc.data();
}

export const deleteUsersFromAuth = async (token, users) => {
    await getFirebaseAdminInstance(token).post('delete_users', {users});
}

export const deleteUserFromFirebase = async (uid) => {
    await usersCollection.doc(uid).delete();
}

export const signOutAPI = async () => {
    await auth.signOut();
}