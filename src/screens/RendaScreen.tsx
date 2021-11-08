import React, { useState } from 'react';
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
  ScrollView,
} from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

import { TextInput } from 'react-native-gesture-handler';
import { EmptyButton } from '../components/EmptyButton';
import { useNavigation } from '@react-navigation/native';

export default function RendaScreen() {
  const [date, setDate] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [renda, setRenda] = useState<string>();

  const navigation = useNavigation();

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!renda);
  }

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputChange(value: string) {
    setIsFilled(!!value);
    setRenda(value);
  }

  const submit = async () => {
    try {
      // if (renda != null && date != null) {
      fetch('https://apismartex.herokuapp.com/api/rotas/receita', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          valor: renda,
          data: date,
        }),
      });
      alert('Renda Cadastrada! 😀');
      navigation.navigate('Tab');
      // } else {
      // alert('Não deixe campo em BRANCO! 😑');
      // }
    } catch (error) {
      alert(error);
    }
  };

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
            <ScrollView>
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
              <Text style={styles.textBellowInput}>
                Digite sua renda mensal
              </Text>
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
                value={date}
                onChangeText={setDate}
                keyboardType="numeric"
              />
            </ScrollView>
          </View>
          <View style={styles.footer}>
            <EmptyButton title="Cadastrar" onPress={submit} />
            <TouchableOpacity onPress={() => navigation.navigate('Tab')}>
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
    flex: 1,
    paddingLeft: 40,
    paddingRight: 20,
    marginTop: '10%',
    color: colors.header,
    fontFamily: fonts.heading,
    flexDirection: 'row',
    justifyContent: 'space-around',
    // position: 'absolute',
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
    flex: 3,
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
