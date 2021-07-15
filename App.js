import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import {persistor} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
// const Moralis = require('moralis');
// Moralis.initialize("qR0dYYsalIsmo00S0TMYLB7YAMR5si4JIHf8MuDI");

// Moralis.serverURL = 'https://bs8lvgkqrztw.moralis.io:2053/server'


const App = () => {
//   Moralis.Web3.authenticate().then(function (user) {
//     console.log(user.get('ethAddress'))
// })
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;