import { CognitoAuth } from "amazon-cognito-auth-js"
import * as DevConfig from '../config/config.dev.json'
import * as ProdConfig from '../config/config.prod.json'

const config = process.env.NODE_ENV === 'production' ? ProdConfig : DevConfig
const authData = config.AUTH_DATA

// export const parseCredentialsFromHash = () => {
//     const hash = window.location.hash.slice(1)
//     const params = new URLSearchParams(hash)
//     const accessToken = params.get('access_token')
//     const idToken = params.get('id_token')
//     const refreshToken = params.get('refresh_token')
//     const expiresIn = params.get('expires_in')
//     const tokenType = params.get('token_type')
//
// }

export const getAuthHandler = ({ onSuccess, onFailure }) => {
    const auth = new CognitoAuth(authData)
    auth.userhandler = {
        onSuccess: (result) => {
            if (onSuccess) {
                onSuccess(result)
                return
            }
            console.log('登录成功', result);
            // 处理登录成功
        },
        onFailure: (err) => {
            if (onFailure) {
                onFailure(err)
                return
            }
            console.error('登录失败', err);
            // 处理登录失败
        }
    };
    return auth
}

export const refreachToken = (auth) => {
    // Check if token is expired
    return auth.getSignInUserSession().refreshSession(auth.refreshToken, (err, session) => {
        if (err) {
            console.error('刷新token失败', err);
            // 处理刷新token失败
            return
        }
        console.log('刷新token成功', session);
        // 处理刷新token成功
    })
}