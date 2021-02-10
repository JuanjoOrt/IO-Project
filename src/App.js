import React from 'react';
import { Provider } from 'react-redux'
import { Route } from "wouter";

import createStorage from "./Store/configureStore.js";
import Home from './Containers/Home/index';
import User from './Containers/User/index'
import './Styles/App.css'

let store = createStorage();

function App() {
  return (
    <Provider store={store}>
      <Route path="/" component={Home} />
      <Route path="/user/:id">{(params) => <User id={parseInt(params.id)}/>}</Route>
    </Provider>
  );
}

export default App;
