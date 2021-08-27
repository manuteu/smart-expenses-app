import React, { useState } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import { RootStackParamList } from '../../types';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

import { TextInput } from 'react-native-gesture-handler';
import { EmptyButton } from '../components/EmptyButton';

export default function RendaScreen({ navigation }: any) {
  // const [date, setDate] = useState();
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>();
  // const [renda, setRenda] = useState();

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

  // function handleCustom(value: string) {
  //   // setRenda(value);
  // }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <StatusBar backgroundColor="transparent" />
          <View style={styles.header}>
            <View>
              <Text style={styles.title}>
                Cadastro {'\n'}
                de {'\n'}
                Renda
              </Text>
            </View>
            <Image
              style={styles.logo}
              source={require('../../assets/images/Logo.png')}
            />
          </View>

          <View style={styles.forms}>
            <TextInput
              // value={renda}
              // // mask="renda"
              // // inputMaskChange={(text: string) => handleCustom(text)}
              style={[
                styles.input,
                (isFocused || isFilled) && {
                  borderColor: colors.asphalt,
                },
              ]}
              placeholder="R$ 0,00"
              placeholderTextColor={colors.placeholder}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              onChangeText={handleInputChange}
              keyboardType="numeric"
            />
            <Text style={styles.textBellowInput}>Digite sua renda mensal</Text>
            <TextInput
              style={[
                styles.input,
                (isFocused || isFilled) && {
                  borderColor: colors.asphalt,
                },
              ]}
              placeholder="Dia do Pagamento"
              placeholderTextColor={colors.placeholder}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              onChangeText={handleInputChange}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.footer}>
            <EmptyButton
              title="Cadastrar"
              onPress={() => navigation.replace('Root')}
            />
            <TouchableOpacity onPress={() => navigation.replace('Tab')}>
              <Text style={styles.textBellowButton}>Talvez depois</Text>
            </TouchableOpacity>
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
    // padding: 10,
  },
  header: {
    paddingLeft: 40,
    paddingRight: 20,
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
    height: 120,
    width: 120,
  },
  forms: {
    flex: 1,
    paddingHorizontal: 55,
    marginTop: '12%',
  },
  input: {
    borderBottomWidth: 1,
    marginTop: '25%',
    textAlign: 'center',
    fontSize: 18,
    marginLeft: 10,
  },
  textBellowInput: {
    fontSize: 16,
    fontFamily: fonts.heading,
    textAlign: 'center',
    color: colors.turquesa,
    marginTop: 6,
  },
  footer: {
    flex: 1,
    paddingHorizontal: 37,
    position: 'absolute',
    width: '100%',
    bottom: '12%',
  },
  textBellowButton: {
    fontSize: 14,
    color: colors.turquesa,
    fontFamily: fonts.heading,
    textAlign: 'center',
    paddingTop: 7,
  },
});
