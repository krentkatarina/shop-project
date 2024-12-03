import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter} from "react-router-dom";

import './styles/index.css';

import App from './components/App/App'
import { Provider } from 'react-redux';
import { store, persistor } from './features/store';
import { PersistGate } from 'redux-persist/integration/react'


createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </PersistGate>
  </Provider>
     
 );
