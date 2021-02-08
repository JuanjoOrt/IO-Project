
import React from 'react';
import Home from './Containers/Home/index';
import { Provider } from 'react-redux'
import createStorage from "./Store/configureStore.js";
import { Route } from "wouter";

let store = createStorage();

function App() {
  return (
    <Provider store={store}>
      <Route path="/" component={Home} />
    </Provider>
  );
}

export default App;
