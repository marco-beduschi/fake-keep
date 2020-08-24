import 'react-native-gesture-handler';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/screens/home';
import {CreateNoteScreen} from './src/screens/create-note';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="My notes">
          <Drawer.Screen name="My notes" component={HomeScreen} />
          <Drawer.Screen name="Create Note" component={CreateNoteScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
