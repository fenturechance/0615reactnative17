import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import Router from './src/Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBQfyXY33U6JmxthbUvRif-N5EFQoUAHh4',
      authDomain: 'reactnative17-d2728.firebaseapp.com',
      databaseURL: 'https://reactnative17-d2728.firebaseio.com',
      storageBucket: 'reactnative17-d2728.appspot.com',
      messagingSenderId: '991913696105'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
