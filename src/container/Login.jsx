// src/components/Login.js
import React, { useState, useEffect } from 'react';
import { getAuthHandler } from '../utils/auth';
import Login from '../components/Login';


const LoginImpl = () => {
    const [auth, setAuth] = useState(null);

    useEffect(() => {
        const auth = getAuthHandler({});
        auth.useCodeGrantFlow()

        // 检查当前 URL 是否为登录回调 URL
        if (window.location.href.includes('id_token')) {
            auth.parseCognitoWebResponse(window.location.href);
        }
        setAuth(auth);
    }, []);

    const handleSignInWithGoogle = () => {
        auth.getSession();
    };

    return (
        <Login onLogin={handleSignInWithGoogle}/>
    );

}

export default LoginImpl;