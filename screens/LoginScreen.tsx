import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export default function LoginScreen() {
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
  },
  input: {
    borderBottomWidth: 1,
    borderColor: colors.violet_dark,
    color: colors.header,
    width: '100%',
    fontSize: 20,
    padding: 15,
    textAlign: 'center',
    marginTop: 30,
  },
});
