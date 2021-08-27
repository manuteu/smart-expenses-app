import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Image,
} from 'react-native';

import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { StackScreenProps } from '@react-navigation/stack';

import { RootStackParamList } from '../../types';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { Button } from '../components/Button';

export default function RegistreScreen({ navigation }: any) {
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
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <View style={styles.header}>
            <View>
              <Text style={styles.title}>Registre-se,</Text>
              <Text style={styles.subTitle}>
                Para desfrutar de {'\n'}
                Nossos recursos
              </Text>
            </View>
            <Image
              style={styles.logo}
              source={require('../../assets/images/Logo.png')}
            />
          </View>
          <ScrollView>
            <View style={styles.form}>
              <TextInput
                style={[
                  styles.input,
                  (isFocused || isFilled) && {
                    borderColor: colors.turquesa,
                  },
                ]}
                placeholder="Nome"
                placeholderTextColor={colors.placeholder}
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
                onChangeText={handleInputChange}
                autoCompleteType="name"
              />
              <TextInput
                style={[
                  styles.input,
                  (isFocused || isFilled) && {
                    borderColor: colors.turquesa,
                  },
                ]}
                placeholder="Sobrenome"
                placeholderTextColor={colors.placeholder}
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
                onChangeText={handleInputChange}
                autoCompleteType="name"
              />
              <TextInput
                style={[
                  styles.input,
                  (isFocused || isFilled) && {
                    borderColor: colors.turquesa,
                  },
                ]}
                placeholder="E-mail"
                placeholderTextColor={colors.placeholder}
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
                onChangeText={handleInputChange}
                autoCompleteType="email"
              />
              <TextInput
                style={[
                  styles.input,
                  (isFocused || isFilled) && {
                    borderColor: colors.turquesa,
                  },
                ]}
                placeholder="Nome de usuário"
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
                    borderColor: colors.turquesa,
                  },
                ]}
                placeholder="Senha"
                placeholderTextColor={colors.placeholder}
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
                onChangeText={handleInputChange}
                autoCompleteType="password"
                maxLength={16}
                secureTextEntry={true}
              />
              <TextInput
                style={[
                  styles.input,
                  (isFocused || isFilled) && {
                    borderColor: colors.turquesa,
                  },
                ]}
                placeholder="Confirme a Senha"
                placeholderTextColor={colors.placeholder}
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
                onChangeText={handleInputChange}
                autoCompleteType="password"
                maxLength={16}
                secureTextEntry={true}
              />
            </View>
          </ScrollView>

          <View style={styles.button}>
            <Button
              title="Registrar"
              onPress={() => navigation.replace('Login')}
            />
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
    // flex: 2,
    marginTop: '10%',
    color: colors.header,
    fontFamily: fonts.heading,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  logo: {
    height: 120,
    width: 120,
  },
  title: {
    fontSize: 34,
    marginLeft: 15,
    color: colors.header,
    fontFamily: fonts.heading,
  },
  subTitle: {
    fontSize: 18,
    marginLeft: 15,
    color: colors.header,
    marginTop: 7,
  },
  form: {
    marginTop: '10%',
    paddingHorizontal: 50,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  input: {
    borderBottomWidth: 1,
    borderColor: colors.placeholder,
    color: colors.header,
    width: '100%',
    fontSize: 16,
    textAlign: 'center',
    flexDirection: 'column',
    marginBottom: 36,
  },

  button: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingHorizontal: 37,
    marginBottom: '10%',
  },
});
