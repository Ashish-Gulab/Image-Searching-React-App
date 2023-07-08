import React, { StrictMode } from 'react';
import ReactDom from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root=ReactDom.createRoot(document.getElementById('root'));

root.render(<StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </StrictMode>);