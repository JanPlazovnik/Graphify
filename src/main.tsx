import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import App from './App';
import './assets/styles/global.css' ;
import dayjs from "dayjs";
import duration from 'dayjs/plugin/duration'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(duration);
dayjs.extend(relativeTime);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RecoilRoot>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </RecoilRoot>
    </React.StrictMode>
);
