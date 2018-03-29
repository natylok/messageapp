import React, { Component } from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'
import Root from './root'
const store = createStore(reducers)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Root></Root>
      </Provider>
    );
  }
}

export default App;
