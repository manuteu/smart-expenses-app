import React, { useState } from 'react';
import axios from 'axios';
import {
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';
import {
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import { Picker } from '@react-native-picker/picker';
import { SafeAreaView } from 'react-native-safe-area-context';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { EmptyButton } from '../components/EmptyButton';

type Despesa = {
  nome: string;
  tipo: string;
  preco: number;
  data: Date;
};

export default function Despesa() {
  const [nome, setNome] = useState('');
  const [tipo, setTipo] = useState('');
  const [preco, setPreco] = useState('');
  const [data, setData] = useState('');

  async function submit() {
    try {
      await axios({
        method: 'POST',
        url: 'http://localhost:3000/despesas',
        data: {
          nome,
          tipo,
          preco,
          data,
        },
      });
      alert('Despesa Cadastrada');
    } catch (error) {
      alert('Erro ao cadastrar despesa...');
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior="position">
          <View style={styles.header}>
            <View>
              <Text style={styles.title}>
                Cadastro {'\n'}
                de {'\n'}
                despesa
              </Text>
            </View>
            <Image
              style={styles.logo}
              source={require('../../assets/images/Logo.png')}
            />
          </View>
          <ScrollView style={styles.forms}>
            <View>
              <Picker
                style={styles.picker}
                selectedValue={tipo}
                onValueChange={(itemValue, itemIndex) => setTipo(itemValue)}
              >
                <Picker.Item
                  color={colors.turquesa}
                  key={0}
                  label="Alimentação"
                  value="Alimentação"
                />
                <Picker.Item key={1} label="Transporte" value="Transporte" />
                <Picker.Item key={2} label="Aluguel" value="Aluguel" />
                <Picker.Item key={3} label="Lazer" value="Lazer" />
                <Picker.Item key={4} label="Vestimenta" value="Vestimenta" />
              </Picker>
            </View>
          </ScrollView>
          <View style={styles.footer}>
            <EmptyButton title="Cadastrar" onPress={submit} />
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: colors.background_light,
  },
  header: {
    // flex: 1,
    paddingLeft: 40,
    paddingRight: 20,
    marginTop: '7%',
    color: colors.header,
    fontFamily: fonts.heading,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: colors.concret,
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
    // backgroundColor: colors.green,
  },
  picker: {
    // backgroundColor: colors.dark_blue,
  },
  inputs: {},
  textBellowInput: {},
  footer: {
    flex: 1,
    paddingHorizontal: 37,
  },
});
