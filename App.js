import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/components/Home';
import Detail from './src/components/Detail'

const Stack = createStackNavigator();

export default function App() {

  return <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ gestureEnabled: false }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: '',
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{
          title: '',
          headerTransparent: true,
          headerTintColor: 'white'
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
}


