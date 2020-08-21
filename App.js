import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Home from './src/screens/home';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Home />
      </SafeAreaView>
    </>
  );
};

export default App;
