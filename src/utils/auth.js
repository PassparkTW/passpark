import { signOut, getCurrentUser, fetchAuthSession, fetchUserAttributes } from 'aws-amplify/auth';

export const currentSession = async () => {
    try {
        const { accessToken, idToken } = (await fetchAuthSession()).tokens ?? {};
        if (accessToken && idToken) {
            return { accessToken, idToken };
        }
    } catch (err) {
        console.error(err);
    }
}

export const currentAuthenticatedUser = async () => {
    try {
        const data = await getCurrentUser();
        return data;
    } catch (err) {
        console.error(err);
    }
}

export const handleFetchUserAttributes = async ()=> {
    try {
        const userAttributes = await fetchUserAttributes();
        return userAttributes
    } catch (error) {
        console.log(error);
    }
}

export const onSignOut = async () => {
    await signOut();
    localStorage.removeItem('token');
}