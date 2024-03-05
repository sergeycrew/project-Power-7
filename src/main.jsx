import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import App from './App.jsx';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/Theme.jsx';
import { GlobalStyle } from './styles/globalStyles.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}> 
    <BrowserRouter basename="/project-Power-7">
      <ThemeProvider theme={theme}>
        <App />
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
     </PersistGate>
    </Provider> 
  </React.StrictMode>
);
