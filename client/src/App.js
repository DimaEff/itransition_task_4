import React, {useState} from "react";

import {providers} from "./firebaseAPI/config";
import {signIn, signOut, deleteUsers, setIsBlockedUsersStatus} from './firebaseAPI';
import useOnAuthChanged from "./hooks/useOnAuthChanged";


function App() {
    const {currentUser, token} = useOnAuthChanged();
    const testUsers = [
        {
            uid: 'hnrnBkfFmfMPAEU9e3GAR50ZjC42',
            displayName: 'Dima',
            signInMethod: '123',
            creationTime: '123',
            lastSignInTime: '123',
            isBlocked: false,
        },
    ]

    const [click, setClick] = useState(false);

    return (
        <div>
            <div>
                <h1>
                    Ни в коем случае не нажимать на кнопки delet me, block me и unblock me!!!!!!!
                </h1>
            </div>
            {currentUser?.displayName || 'null'}
            <button onClick={() => signIn(providers.facebook)}>
                sign in with facebook
            </button>
            <button onClick={() => signIn(providers.google)}>
                sign in with google
            </button>
            <button onClick={() => signIn(providers.github)}>
                sign in with github
            </button>
            <button onClick={signOut}>
                exit
            </button>
            <button onClick={setClick}>
                delete me
            </button>
            <button onClick={setClick}>
                block me
            </button>
            <button onClick={setClick}>
                unblock me
            </button>
            {click && <img style={{position: 'absolute', width: '100%', left: '0%'}} src="https://lh3.googleusercontent.com/proxy/NLMouxZjyUY6HTh8fMTsFSB8kI-srXfTueZgb44uKoPj11QGEd76YYZQZ5u8ZAP_7p1zX_xlgIbsG3L4gu7qcm19x5I" alt=""/>}
            {/*<button onClick={() => deleteUsers(token, testUsers)}>*/}
            {/*    delete me*/}
            {/*</button>*/}
            {/*<button onClick={() => setIsBlockedUsersStatus(testUsers, true)}>*/}
            {/*    block me*/}
            {/*</button>*/}
            {/*<button onClick={() => setIsBlockedUsersStatus(testUsers, false)}>*/}
            {/*    unblock me*/}
            {/*</button>*/}
        </div>
    );
}

export default App;