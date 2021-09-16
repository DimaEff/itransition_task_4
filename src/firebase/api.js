import {auth, facebookAuthProvider, googleAuthProvider, githubAuthProvider} from "./index";


const SignIn = async (provider) => {
    return await auth.signInWithPopup(provider);
}

export const SignInWithGoogle = async () => {
    const {user} = await SignIn(googleAuthProvider);
    console.log(user);
};

export const SignInWithFacebook = async () => {
    const {user} = await SignIn(facebookAuthProvider);
    console.log(user);
}

export const SignInWithGitHub = async () => {
    const {user} =await SignIn(githubAuthProvider);
    console.log(user);
}

export const SignOut = async () => {
    await auth.signOut();
    console.log('exit');
}