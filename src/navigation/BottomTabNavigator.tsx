import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Metas from '../screens/MetasScreen';
import Despesas from '../screens/DespesaScreen';
import Home from '../screens/HomeScreen';
import SaveMoney from '../screens/SaveMoneyScreen';
import Perfil from '../screens/PerfilScreen';

import {
  BottomTabParamList,
  TabMetasParamList,
  TabDespesaParamList,
  TabHomeParamList,
  TabSaveMoneyParamList,
  TabPerfilParamList,
} from '../../types';
import colors from '../styles/colors';
import { StyleSheet } from 'react-native';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        keyboardHidesTabBar: true,
        showLabel: false,
        style: {
          backgroundColor: colors.dark_asphalt,
          borderTopColor: colors.dark_asphalt,
        },
      }}
    >
      <BottomTab.Screen
        name="Metas"
        component={Metas}
        options={{
          tabBarIcon: () => (
            <TabBarIcon name="grid-outline" color={colors.background_light} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Despesa"
        component={Despesas}
        options={{
          tabBarIcon: () => (
            <TabBarIcon name="pie-chart" color={colors.background_light} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => (
            <TabBarIcon name="home" color={colors.background_light} />
          ),
        }}
      />
      <BottomTab.Screen
        name="SaveMoney"
        component={SaveMoney}
        options={{
          tabBarIcon: () => (
            <TabBarIcon name="moon" color={colors.background_light} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarIcon: () => (
            <TabBarIcon name="person" color={colors.background_light} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>['name'];
  color: string;
}) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabMetasStack = createStackNavigator<TabMetasParamList>();

export function TabMetasNavigator() {
  return (
    <TabMetasStack.Navigator>
      <TabMetasStack.Screen name="MetasScreen" component={Metas} />
    </TabMetasStack.Navigator>
  );
}

const TabDespesaStack = createStackNavigator<TabDespesaParamList>();

export function TabDespesaNavigator() {
  return (
    <TabDespesaStack.Navigator>
      <TabDespesaStack.Screen name="DespesaScreen" component={Despesas} />
    </TabDespesaStack.Navigator>
  );
}
const TabHomeStack = createStackNavigator<TabHomeParamList>();

export function TabHomeNavigator() {
  return (
    <TabHomeStack.Navigator>
      <TabHomeStack.Screen name="HomeScreen" component={Home} />
    </TabHomeStack.Navigator>
  );
}

const TabSaveMoneyStack = createStackNavigator<TabSaveMoneyParamList>();

export function TabSaveMoneyNavigator() {
  return (
    <TabSaveMoneyStack.Navigator>
      <TabSaveMoneyStack.Screen name="SaveMoneyScreen" component={SaveMoney} />
    </TabSaveMoneyStack.Navigator>
  );
}

const TabPerfilStack = createStackNavigator<TabPerfilParamList>();

export function TabPerfilNavigator() {
  return (
    <TabPerfilStack.Navigator>
      <TabPerfilStack.Screen name="PerfilScreen" component={Perfil} />
    </TabPerfilStack.Navigator>
  );
}
