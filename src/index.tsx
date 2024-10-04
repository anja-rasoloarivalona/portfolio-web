import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// routing
import { BrowserRouter } from 'react-router-dom';

// theme
import { ThemeProvider } from 'styled-components';
import theme from './theme';

// translations
import { I18nextProvider } from 'react-i18next';
import { i18n } from './translations';

// slick
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    // <React.StrictMode>
    <I18nextProvider i18n={i18n}>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ThemeProvider>
    </I18nextProvider>,
    // </React.StrictMode>
);

// import reportWebVitals from './reportWebVitals';
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
