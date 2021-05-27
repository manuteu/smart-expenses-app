import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { View, Text, StyleSheet, Image } from 'react-native';

import { RootStackParamList } from '../types';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export default function RendaScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'Renda'>) {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.title}>Cadastro de Renda</Text>
      </View>
      <Image
        style={styles.logo}
        source={require('../assets/images/Logo.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    // padding: 10,
  },
  header: {
    padding: 10,
    marginTop: '10%',
    // paddingHorizontal: 10,

    color: colors.header,
    fontFamily: fonts.heading,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 28,
    fontFamily: fonts.heading,
    color: colors.header,
    marginTop: 7,
  },
  subTitle: {},
  logo: {
    justifyContent: 'flex-end',
    height: 60,
    width: 60,
  },
});
