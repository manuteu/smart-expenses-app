import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import DatePicker from 'react-native-datepicker';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import {
  ScrollView,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import { Button } from '../components/Button';
import { sub } from 'react-native-reanimated';

type Despesa = {
  nome: string;
  tipo: string;
  preco: number;
};

export default function Despesa() {
  const [nome, setNome] = useState('');
  const [tipo, setTipo] = useState('');
  const [preco, setPreco] = useState('');

  async function submit() {
    await axios({
      method: 'POST',
      url: 'http://localhost:3000/despesas',
      data: {
        nome,
        tipo,
        preco,
      },
    });
    alert('Despesa Cadastrada');
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView style={styles.container}>
          <View style={styles.header}>
            <View>
              <Text style={styles.title}>Cadastro de despesa</Text>
            </View>
            <Image
              style={styles.logo}
              source={require('../../assets/images/Logo.png')}
            />
          </View>
          <View style={styles.container}>
            <View style={styles.flexColumn}>
              <TextInput
                style={styles.input}
                placeholder="Nome"
                placeholderTextColor={colors.placeholder}
                keyboardType="default"
                onChangeText={(text) => {
                  setNome(text);
                }}
              />
              <Text style={styles.textBelowInput}>Nome da despesa</Text>
              <TextInput
                style={styles.input}
                placeholder="Alimentação"
                placeholderTextColor={colors.placeholder}
                keyboardType="default"
                onChangeText={(text) => {
                  setTipo(text);
                }}
              />
              <Text style={styles.textBelowInput}>Tipo da despesa</Text>
              <TextInput
                style={styles.input}
                placeholder="R$ 0,00"
                placeholderTextColor={colors.placeholder}
                keyboardType="numeric"
                onChangeText={(text) => {
                  setPreco(text);
                }}
              />

              <Text style={styles.textBelowInput}>Valor da despesa</Text>

              {/* <DatePicker
                format="DD/MM/YYYY"
                style={styles.dateComponent}
                date={state.data}
                onDateChange={changeDate}
              /> */}
              <View style={styles.button}>
                <Button title="submit" onPress={submit} />
              </View>
              {/* <Text style={styles.textBelowInput}>Data de pagamento</Text> */}
            </View>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}
// const state = {
//   data: '',
// };
// const changeDate = (valor: any) => {
//   useState({
//     data: valor,
//   });
// };

const styles = StyleSheet.create({
  dateComponent: {
    width: 250,
  },
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.background_light,
    textAlign: 'center',
  },
  flexColumn: {
    marginTop: '-10%',
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: colors.background_light,
    textAlign: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
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
    width: '80%',
    marginBottom: '1%',
    textAlign: 'center',
    // marginBottom: '100%',
    fontSize: 18,
  },
  textBelowInput: {
    fontSize: 16,
    fontFamily: fonts.heading,
    textAlign: 'right',
    color: colors.header,
    marginBottom: '5%',
  },
  footer: {
    paddingHorizontal: 37,
    position: 'absolute',
    width: '100%',
    bottom: '12%',
  },

  button: {
    width: '80%',
  },
});

// function showMode(arg0: string) {
//   throw new Error('Function not implemented.');
// }
