// src/components/Login.js
import Login from '../components/Login';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

const LoginImpl = ({ signOut, user }) => {

    return (
        <Login />
    );

}

export default withAuthenticator(LoginImpl);