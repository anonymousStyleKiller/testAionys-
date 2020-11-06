import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/i18n';
import { Provider } from "react-redux";
import store from "./redux/store";


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <I18nextProvider i18n={i18n}>
                <App/>
            </I18nextProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);



