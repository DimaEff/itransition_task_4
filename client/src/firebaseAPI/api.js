import axios from "axios";

import {db, auth} from "./config";


const usersCollection = db.collection('users');

const getFirebaseAdminInstance = (token) => axios.create({
    baseURL: 'http://localhost:5000/',
    withCredentials: true,
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

export const getUserData = async (uid) => {
    const doc = await usersCollection.doc(uid).get();
    return doc.data();
}

export const deleteUsersFromAuth = async (token, users) => {
    const res = await axios.post('http://localhost:5000/api/delete_users', {users}, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
}

export const deleteUserFromFirebase = async (uid) => {
    await usersCollection.doc(uid).delete();
}

export const signOutAPI = async () => {
    await auth.signOut();
}