import * as React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MyDrawer from './screens';

  const image = {
    uri: 'https://i.pinimg.com/originals/a3/d9/43/a3d9430be39a860f0b065c85b78ab3b4.jpg',
  };
export default function App() {

  return (
    <NavigationContainer>
        <MyDrawer />
    </NavigationContainer>
  );
}

