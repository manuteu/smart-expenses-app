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
} from 'react-native';

import { RootStackParamList } from '../types';
import { EmptyButton } from '../components/EmptyButton';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

import { TextInput } from 'react-native-gesture-handler';

export default function RendaScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'Renda'>) {
  // const [date, setDate] = useState();
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
    <SafeAreaView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <View style={styles.header}>
            <View>
              <Text style={styles.title}>Cadastro de Renda</Text>
            </View>
            <Image
              style={styles.logo}
              source={require('../assets/images/Logo.png')}
            />
          </View>

          <View style={styles.forms}>
            <View>
              <TextInput
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
              <View>
                <Text style={styles.textBellowInput}>
                  Toque para digitar o valor
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.footer}>
            <EmptyButton
              title="Cadastrar"
              onPress={() => navigation.replace('Root')}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
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
    fontSize: 28,
    fontFamily: fonts.heading,
    color: colors.header,
    marginTop: 7,
  },
  logo: {
    justifyContent: 'flex-end',
    height: 60,
    width: 60,
  },
  forms: {
    paddingHorizontal: 55,
  },
  input: {
    // flex: 1,
    borderBottomWidth: 1,
    marginTop: '10%',
    textAlign: 'center',
    // marginBottom: '100%',
    fontSize: 18,
    marginLeft: 10,
  },
  textBellowInput: {
    fontSize: 16,
    fontFamily: fonts.text,
    textAlign: 'center',
  },
  footer: {
    // flex: 1,
    paddingHorizontal: 37,
    // width: '90%',
  },
});
