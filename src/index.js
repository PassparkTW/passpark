import React from 'react';
import ReactDOM from 'react-dom/client';
import { I18n } from 'aws-amplify/utils';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Amplify } from 'aws-amplify';
import config from './amplifyconfiguration.json';
import zhTW from './i18n/zh_TW.json';
Amplify.configure(config);

console.log('envs', process.env)
I18n.putVocabularies({
    'zh_TW': zhTW 
});
I18n.setLanguage('zh_TW');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
