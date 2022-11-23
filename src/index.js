import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Elements } from '@stripe/react-stripe-js';
 
import { store, persistor } from './store/store';
import App from './App';
import { stripePromisse } from './utils/stripe/stripe.utils';

import './index.scss'; 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>  {/*Wrap the whole app with the persisterGate*/}
        <BrowserRouter>
        <Elements stripe={stripePromisse}>
          <App />
        </Elements>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);


reportWebVitals();
