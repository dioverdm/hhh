import React from 'react';
import './login.css'
import {Button} from "@material-ui/core"
import { auth, provider } from './firebase';


function Login() {
    const signIn = () => {
            auth
            .signInWithPopup(provider)
            .then((result) => console.log(result))
            .catch((error) => alert(error.message))
    };

    return (
        <div className="login">
            <div className="login__container">
                <div className="login__text">
                    <h1>Login to chatAPP</h1>
                    <div>
                        <Button onClick={Login}>Sign in with Google</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
