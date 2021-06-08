import React from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { ScrollView, TextInput, TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default function Despesa() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Cadastro de despesa</Text>
        </View>
        <Image style={styles.logo} source={require('../../assets/images/Logo.png')} />
      </View>
      <View>
        <Text style={styles.textBelowInput}>Tipo de despesa</Text>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.background_light,
    // padding: 10,
  },
  header: {
    paddingLeft: 20,
    marginTop: '10%',
    color: colors.header,
    fontFamily: fonts.heading,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 30,
    fontFamily: fonts.heading,
    color: colors.header,
    marginTop: 7,
  },
  logo: {
    height: 60,
    width: 60,
  },
  forms: {
    flex: 1,
    paddingHorizontal: 55,
    justifyContent: 'center',
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: '20%',
    marginTop: '10%',
    textAlign: 'center',
    // marginBottom: '100%',
    fontSize: 18,
    marginLeft: 10,
  },
  textBelowInput: {
    fontSize: 16,
    fontFamily: fonts.heading,
    textAlign: 'center',
    color: colors.header,
  },
  footer: {
    paddingHorizontal: 37,
    position: 'absolute',
    width: '100%',
    bottom: '12%',
  },
});
