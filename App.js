// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';

import HomeScreen from './HomeScreen';
import SecondScreen from './SecondScreen';
import Login from './Login';
import Dashboard from './Dashboard';
import MyCart from './MyCart';
import ThankYou from './ThankYou';
const Stack = createNativeStackNavigator();

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="MyCart" component={MyCart} />
          <Stack.Screen name="ThankYou" component={ThankYou} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
