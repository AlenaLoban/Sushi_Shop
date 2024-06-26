import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './core/App.tsx';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './core/store/index.ts';
import { PersistGate } from 'redux-persist/integration/react';
import ErrorBoundary from './core/ErrorBoundary.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <HashRouter>
        <React.StrictMode>
          <ErrorBoundary>
          <App />
          </ErrorBoundary>
        </React.StrictMode>
      </HashRouter>
    </PersistGate>
  </Provider>,
);
