import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/HomeScreen';
import Despesa from '../screens/DespesaScreen';
import Perfil from '../screens/PerfilScreen';
import colors from '../styles/colors';
import { createStackNavigator } from '@react-navigation/stack';

const CustomTabBarButton = ({ onPress }) => (
  <TouchableOpacity
    style={{
      top: -30,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.dark_asphalt,
      borderRadius: 35,
      // ...styles.shadow,
    }}
    onPress={onPress}
  >
    <Image
      source={require('../../assets/images/button-mais.png')}
      resizeMode="contain"
      style={{
        width: 65,
        height: 65,
        // tintColor: colors.turquesa,
        // backgroundColor: colors.dark_asphalt,
        // borderColor: colors.turquesa,
        // tintColor: colors.dark_asphalt,
      }}
    />
    {/* {children} */}
    {/* </Image> */}
    {/* <AntDesign name="pluscircleo" size={60} color={colors.turquesa}>
      {children}
    </AntDesign> */}
  </TouchableOpacity>
);

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const CustomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        showLabel: false,
        style: {
          position: 'absolute',
          // bottom: 25,
          backgroundColor: colors.dark_asphalt,
          borderTopColor: colors.dark_asphalt,
          borderTopLeftRadius: 35,
          borderTopRightRadius: 35,
          height: 60,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require('../../assets/images/casa.png')}
                resizeMode="contain"
                style={{
                  width: 35,
                  height: 35,
                  tintColor: focused ? '#1ABC9C' : '#ECF0F1',
                }}
              />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="CadastrarDespesa"
        component={Despesa}
        options={{
          tabBarVisible: false,
          // tabBarIcon: ({ focused }) => (
          //   // <Image
          //   //   source={require('../../assets/images/adicionar.png')}
          //   //   resizeMode="contain"
          //   //   style={{
          //   //     width: 70,
          //   //     height: 70,
          //   //     tintColor: colors.dark_asphalt,
          //   //   }}
          //   // />
          //   // <AntDesign name="pluscircleo" size={75} color={colors.turquesa} />
          // ),
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require('../../assets/images/definicoes.png')}
                resizeMode="contain"
                style={{
                  width: 35,
                  height: 35,
                  tintColor: focused ? '#1ABC9C' : '#ECF0F1',
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: colors.cloud,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 7,
    elevation: 5,
  },
});

export default CustomTabs;
