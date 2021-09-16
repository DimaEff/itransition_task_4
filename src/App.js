import React from "react";

import {SignInWithFacebook, SignInWithGoogle, SignInWithGitHub, SignOut} from "./firebase/api";
import useOnAuthChanged from "./hooks/useOnAuthChanged";


function App() {
    const user = useOnAuthChanged();

    return (
        <div>
            {user?.displayName || 'null'}
            <button onClick={SignInWithFacebook}>
                sign in with facebook
            </button>
            <button onClick={SignInWithGoogle}>
                sign in with google
            </button>
            <button onClick={SignInWithGitHub}>
                sign in with github
            </button>
            <button onClick={SignOut}>
                exit
            </button>
        </div>
    );
}

export default App;