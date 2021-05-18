import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Button } from '../components/Button';

import colors from '../styles/colors';
import { RootStackParamList } from '../types';

export default function TabOneScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'Registre'>) {
  return (
    <View style={styles.container}>
      <View style={styles.purpleCard}>
        <Text style={styles.cardText}>Olá Usuário1</Text>
        <View style={styles.separator} />
        <View>
          <Text style={styles.cardText}>Seu saldo é</Text>
          <Text style={styles.cardTextBold}>R$ 2.437,63</Text>
        </View>
      </View>
      <View style={styles.separator} />

      <View style={styles.button}>
        <Button
          title="Ir para Login"
          onPress={() => navigation.replace('Login')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  purpleCard: {
    textAlign: 'center',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.purple,
    minWidth: '80%',
    maxHeight: '25%',
    borderRadius: 30,
    marginTop: '3%',
    marginBottom: '3%',
    color: '#fff',
  },
  cardText: {
    color: '#fff',
    textAlign: 'center',
  },
  cardTextBold: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background_light,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: '80%',
  },
  button: {
    width: '80%',
  },
});
