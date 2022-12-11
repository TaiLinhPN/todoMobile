import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MyDrawer from './screens';

export default function App() {
  return (
      <NavigationContainer>
        <MyDrawer />
      </NavigationContainer>
  );
}
