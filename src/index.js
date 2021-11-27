import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { StyledEngineProvider } from '@mui/material/styles';


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <StyledEngineProvider injectFirst>
                <App />
            </StyledEngineProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);


