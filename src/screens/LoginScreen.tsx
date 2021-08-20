import { StackScreenProps } from '@react-navigation/stack';
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
import { CheckBox } from 'react-native-elements';

import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { RootStackParamList } from '../../types';
import { Button } from '../components/Button';

export default function LoginScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'Login'>) {
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
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <View style={styles.header}>
            <View>
              <Text style={styles.title}>Olá,</Text>
              <Text style={styles.subTitle}>
                Faça login ou {'\n'}
                Registre-se
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
                placeholder="Nome de usuário ou e-mail"
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
                  title="Manter sessão"
                  checkedIcon="check"
                  uncheckedIcon="square-o"
                  checkedColor={colors.asphalt}
                  uncheckedColor={colors.asphalt}
                  checked={isSelected}
                  onPress={() => setSelection(!isSelected)}
                  containerStyle={{ backgroundColor: colors.background_light }}
                  textStyle={{ fontFamily: fonts.title, fontSize: 16 }}
                />
              </View>
            </View>
          </ScrollView>

          <View style={styles.footer}>
            <TouchableOpacity onPress={() => navigation.replace('Registre')}>
              <Text style={styles.footerText}>Registre-se</Text>
            </TouchableOpacity>

            <View style={styles.button}>
              <Button
                title="Entrar"
                onPress={() => navigation.replace('Renda')}
              />
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
    flex: 1,
    marginTop: '10%',
    marginLeft: 13,
    paddingHorizontal: 25,
    color: colors.header,
    fontFamily: fonts.heading,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logo: {
    width: 110,
    height: 110,
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
    flex: 1,
    width: '95%',
    // marginTop: '10%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  },
  input: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: colors.placeholder,
    color: colors.header,
    width: '100%',
    fontSize: 18,
    padding: 15,
    textAlign: 'center',
    marginTop: '20%',
  },
  checkboxContainer: {
    marginTop: '5%',
    width: '100%',
    justifyContent: 'flex-start',
  },

  footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '20%',
    width: '100%',
    paddingHorizontal: 25,
    position: 'absolute',
    bottom: 0,
  },
  footerText: {
    color: colors.asphalt,
    marginTop: 12,
    marginLeft: 20,
  },
  button: {
    width: '40%',
  },
});
