import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import RegistreScreen from '../screens/RegistreScreen';
import RendaScreen from '../screens/RendaScreen';
import DespesaScreen from '../screens/DespesaScreen';

import NotFoundScreen from '../screens/NotFoundScreen';
import CustomTabs from './CustomTabs';

const Stack = createStackNavigator();

export default function RootNavigator() {
  return (
    // <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Renda" component={RendaScreen} />
      <Stack.Screen name="Registre" component={RegistreScreen} />
      <Stack.Screen name="Despesa" component={DespesaScreen} />
      <Stack.Screen name="Tab" component={CustomTabs} />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: 'Oops!' }}
      />
    </Stack.Navigator>
    // </NavigationContainer>
  );
}
