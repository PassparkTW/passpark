import { CognitoAuth } from "amazon-cognito-auth-js"
import * as DevConfig from '../config/config.development.json'
import * as ProdConfig from '../config/config.prod.json'
import * as BetaConfig from '../config/config.beta.json'

let config = ProdConfig
if (process.env.REACT_APP_ENV === 'local') {
    config = DevConfig
}
if (process.env.REACT_APP_ENV === 'beta') {
    config = BetaConfig
}


const authData = config.AUTH_DATA

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