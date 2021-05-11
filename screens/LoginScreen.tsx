import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  CheckBox,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {} from '@react-native-community/checkbox';

import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

import { Button } from '../components/Button';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export default function LoginScreen() {
  const [isSelected, setSelection] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>();

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!name);
  }

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputChange(value: string) {
    setIsFilled(!!value);
    setName(value);
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === 'ios' ? 'position' : 'height'}
        >
          <View style={styles.header}>
            <Text style={styles.title}>Olá,</Text>
            <Text style={styles.subTitle}>
              Faça login ou {'\n'}
              Registre-se
            </Text>
          </View>

          <View style={styles.form}>
            <TextInput
              style={[
                styles.input,
                (isFocused || isFilled) && {
                  borderColor: colors.violet_dark,
                },
              ]}
              placeholder="Nome de usuário ou e-mail"
              placeholderTextColor={colors.placeholder}
              onBlur={handleInputBlur}
              onFocus={handleInputFocus}
              onChangeText={handleInputChange}
              autoCompleteType="username"
            />
            <TextInput
              style={[
                styles.input,
                (isFocused || isFilled) && {
                  borderColor: colors.violet_dark,
                },
              ]}
              placeholder="Sua Senha"
              placeholderTextColor={colors.placeholder}
              onBlur={handleInputBlur}
              onFocus={handleInputFocus}
              // onChangeText={handleInputChange}
              autoCompleteType="password"
              maxLength={16}
              secureTextEntry={true}
            />

            <View style={styles.checkboxContainer}>
              <CheckBox
                style={styles.checkbox}
                value={isSelected}
                onValueChange={setSelection}
              />
              <Text style={styles.checkboxText}>Manter sessão</Text>
            </View>

            <View style={styles.footer}>
              <TouchableOpacity>
                <Text style={styles.footerText}>Registre-se</Text>
              </TouchableOpacity>

              <View style={styles.button}>
                <Button title="Entrar" />
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
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
    marginTop: 20,
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
    paddingHorizontal: 37,
    marginTop: 30,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: colors.violet,
    color: colors.header,
    width: '100%',
    fontSize: 18,
    padding: 15,
    textAlign: 'center',
    marginTop: 40,
  },
  checkboxContainer: {
    marginTop: 40,
    flexDirection: 'row',
  },
  checkbox: {
    borderColor: colors.violet_dark,
    padding: 8,
    borderRadius: 2.5,
  },
  checkboxText: {
    paddingHorizontal: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '20%',
    width: '100%',
  },
  footerText: {
    color: colors.violet_dark,
    marginTop: 12,
  },
  button: {
    width: '40%',
  },
});
