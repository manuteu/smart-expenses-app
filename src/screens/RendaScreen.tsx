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
} from 'react-native';

import { RootStackParamList } from '../../types';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

import { TextInput } from 'react-native-gesture-handler';
import { EmptyButton } from '../components/EmptyButton';


export default function RendaScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'Renda'>) {
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
          <View style={styles.header}>
            <View>
              <Text style={styles.title}>Cadastro de Renda</Text>
            </View>
            <Image
              style={styles.logo}
              source={require('../../assets/images/Logo.svg')}
            />
          </View>

          <View style={styles.forms}>
            <Text style={styles.textBellowInput}>Digite sua renda mensal</Text>
            <TextInput
              // value={renda}
              // // mask="renda"
              // // inputMaskChange={(text: string) => handleCustom(text)}
              style={[
                styles.input,
                (isFocused || isFilled) && {
                  borderColor: colors.purple,
                },
              ]}
              placeholder="R$ 0,00"
              placeholderTextColor={colors.placeholder}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              onChangeText={handleInputChange}
              keyboardType="numeric"
            />
            <TextInput
              style={[
                styles.input,
                (isFocused || isFilled) && {
                  borderColor: colors.purple,
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
  textBellowInput: {
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
