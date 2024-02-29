import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; 
//import './index.css';
import { ThemeProvider } from 'styled-components';
import { theme } from './components/Theme.js';
import {GlobalStyle} from "./styles/GlobalStyle.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/Power-Pulse-7">
      <ThemeProvider theme={theme}>
        <App />
        <GlobalStyle/>
        </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
