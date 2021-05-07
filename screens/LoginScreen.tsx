import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, CheckBox } from 'react-native';

import { TextInput } from 'react-native-gesture-handler';

import { Button } from '../components/Button';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export default function LoginScreen() {
  const [isSelected, setSelection] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Olá,</Text>
        <Text style={styles.subTitle}>
          Faça login ou {'\n'}
          Registre-se
        </Text>
      </View>

      <View style={styles.form}>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Nome de usuário ou e-mail"
          />
          <TextInput style={styles.input} placeholder="Sua Senha" />
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            style={styles.checkbox}
            value={isSelected}
            onValueChange={setSelection}
          />
          <Text style={styles.checkboxText}>Manter sessão</Text>
        </View>
        <View style={styles.footer}>
          <Text>Registre-se</Text>

          <Button title="Entrar" style={styles.button} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.background_light,
  },
  header: {
    paddingVertical: 40,
    paddingHorizontal: 25,
    color: colors.header,
    fontFamily: fonts.heading,
  },
  title: {
    fontSize: 36,
    color: colors.header,
  },
  subTitle: {
    fontSize: 24,
    color: colors.header,
  },
  form: {
    paddingHorizontal: 47,
    marginTop: -20,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: colors.violet_dark,
    color: colors.header,
    width: '100%',
    fontSize: 18,
    padding: 15,
    textAlign: 'center',
    marginTop: 40,
  },
  checkbox: {
    borderColor: colors.violet_dark,
    padding: 8,
    borderRadius: 2.5,
  },
  checkboxText: {
    paddingHorizontal: 8,
  },
  checkboxContainer: {
    marginTop: 55,
    flexDirection: 'row',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 100,
  },
  button: {},
});
