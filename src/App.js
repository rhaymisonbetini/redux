import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Router from './routes';
import store from './store';

import Header from './components/Header'

export default function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Router />
        </BrowserRouter>
      </Provider>
    </div>
  )
}