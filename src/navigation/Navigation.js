import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import RegistreScreen from '../screens/RegistreScreen';
import RendaScreen from '../screens/RendaScreen';
import DespesaScreen from '../screens/DespesaScreen';
import UltimasDespesasScreen from '../screens/UltimasDespesasScreen';

import NotFoundScreen from '../screens/NotFoundScreen';
import CustomTabs from './CustomTabs';
import LoginTokenScreen from '../screens/LoginTokenScreen';

const Stack = createStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator
      // initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="LoginToken" component={LoginTokenScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Registre" component={RegistreScreen} />
      <Stack.Screen name="Renda" component={RendaScreen} />
      <Stack.Screen name="CadastrarDespesa" component={DespesaScreen} />
      <Stack.Screen name="UltimasDespesas" component={UltimasDespesasScreen} />
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
