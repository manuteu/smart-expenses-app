import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/core';
import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';

import api from '../services/api';
import colors from '../styles/colors';

export default function LoginTokenScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    const loginToken = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        try {
          const data = await api.get('/', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          navigation.navigate('Tab');
          console.log(data.data);
        } catch (error) {
          navigation.navigate('Login');
          console.log(error);
        }
      } else {
        navigation.navigate('Login');
      }
    };
    loginToken();
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background_light,
      }}
    >
      <ActivityIndicator color="black" size={60} />
    </View>
  );
}
