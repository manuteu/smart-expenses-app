import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button } from '../components/Button';

import EditScreenInfo from '../components/EditScreenInfo';
import colors from '../styles/colors';
import LoginScreen from './LoginScreen';
// import { TabLoginNavigator } from '../navigation/BottomTabNavigator';
// import { TabLoginParamList } from '../types';

// const goLogin = TabLoginNavigator();
// function goToLoginTab() {
//   return <goLogin />;
// }

export default function TabOneScreen() {
  return (
    
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.cardText}>Olá Usuário1</Text>
        <View style={styles.separator} />
        <View>
          <Text style={styles.cardText}>Seu saldo é</Text>
          <Text style={styles.cardTextBold}>R$ 2.437,63</Text>
        </View>
      </View>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} />
      <EditScreenInfo path="/screens/TabOneScreen.tsx"/>

      <Button
        title="Funciona"
        //onPress={LoginScreen}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    textAlign: 'center',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#93278F',
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
});
