import React from 'react';
import { Provider } from 'react-redux'
import { Route } from "wouter";

import createStorage from "./Store/configureStore.js";
import Home from './Containers/Home/index';
import './Styles/App.css'

let store = createStorage();

function App() {
  return (
    <Provider store={store}>
      <Route path="/" component={Home} />
    </Provider>
  );
}

export default App;
