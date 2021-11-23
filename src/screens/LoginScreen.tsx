import React, { useContext, useState } from 'react';
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
// import { RootStackParamList } from '../../types';
import { Button } from '../components/Button';
import { Context } from '../context/authContext';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const navigation = useNavigation();
  const { loginUser } = useContext(Context);

  const [isSelected, setSelection] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [email, setEmail] = useState<string>();
  const [senha, setSenha] = useState<string>();

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!email);
    setIsFilled(!!senha);
  }

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputChange(value: string) {
    setIsFilled(!!value);
    setEmail(value);
    setSenha(value);
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
                value={senha}
                onChangeText={setSenha}
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
            <TouchableOpacity onPress={() => navigation.navigate('Registre')}>
              <Text style={styles.footerText}>Registre-se</Text>
            </TouchableOpacity>

            <View style={styles.button}>
              <Button
                title="Entrar"
                onPress={() => {
                  loginUser(email, senha);
                  navigation.navigate('Renda');
                }}
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
    paddingHorizontal: 27,
    backgroundColor: colors.background_light,
  },
  header: {
    // flex: 1,
    marginTop: '10%',
    marginLeft: 13,
    color: colors.header,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  logo: {
    height: 120,
    width: 120,
    marginLeft: 50,
  },
  title: {
    fontSize: 36,
    fontFamily: fonts.heading,
    color: colors.header,
  },
  subTitle: {
    fontSize: 24,
    color: colors.header,
  },
  form: {
    // paddingHorizontal: 37,
    width: '90%',
    marginTop: '10%',
    alignSelf: 'center',
  },
  input: {
    borderBottomWidth: 1,
    borderColor: colors.placeholder,
    color: colors.header,
    width: '100%',
    fontSize: 18,
    padding: 14,
    textAlign: 'center',
    marginTop: '20%',
  },
  checkboxContainer: {
    marginTop: '5%',
    width: '100%',
    justifyContent: 'flex-start',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    // paddingHorizontal: 25,
    position: 'absolute',
    bottom: '10%',
    alignSelf: 'center',
  },
  footerText: {
    color: colors.asphalt,
    marginTop: 12,
    marginLeft: 20,
  },
  button: {
    width: '45%',
  },
});
