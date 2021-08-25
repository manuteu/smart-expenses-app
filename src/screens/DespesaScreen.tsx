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
  TouchableOpacity,
} from 'react-native';
import {
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
// import { Picker } from '@react-native-picker/picker';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Picker, PickerItem } from 'react-native-woodpicker';

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
  const [tipo, setTipo] = useState<PickerItem>();
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

  const dados: Array<PickerItem> = [
    { label: 'Alimentação', value: 1 },
    { label: 'Transporte', value: 2 },
    { label: 'Aluguel', value: 3 },
    { label: 'Lazer', value: 4 },
    { label: 'Vestimenta', value: 5 },
  ];

  // const picker = () => {};
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
              <View>
                <Picker
                  style={styles.picker}
                  item={tipo}
                  items={dados}
                  onItemChange={setTipo}
                  title="Tipo de Despesas"
                  placeholder="Selecione o Tipo"
                  // isNullable
                  containerStyle={{ borderColor: colors.turquesa }}
                  textInputStyle={styles.textPicker}
                />
                <Text style={styles.textBellowInput}>Seleciona a despesa</Text>
              </View>
              {/* <Picker
                prompt="Tipo de Despesas"
                style={styles.picker}
                selectedValue={tipo}
                onValueChange={(itemValue, itemIndex) => setTipo(itemValue)}
                itemStyle={
                  {
                    // color: colors.turquesa,
                  }
                }
              >
                <Picker.Item
                  // color={colors.turquesa}
                  key={0}
                  label="Alimentação"
                  value="Alimentação"
                />
                <Picker.Item key={1} label="Transporte" value="Transporte" />
                <Picker.Item key={2} label="Aluguel" value="Aluguel" />
                <Picker.Item key={3} label="Lazer" value="Lazer" />
                <Picker.Item key={4} label="Vestimenta" value="Vestimenta" />
              </Picker> */}
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
    marginTop: '3%',
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
    marginHorizontal: '15%',
    marginTop: '10%',
  },
  picker: {
    borderBottomWidth: 1,
    borderColor: colors.concret,

    // marginBottom: 20,
  },
  textPicker: {
    fontFamily: fonts.text,
    fontSize: 18,
    textAlign: 'center',
  },
  inputs: {},
  textBellowInput: {
    fontSize: 16,
    fontFamily: fonts.text,
    color: colors.turquesa,
    marginTop: 10,
  },
  footer: {
    // flex: 1,
    width: '100%',
    paddingHorizontal: 37,
    // position: 'absolute',
    marginTop: 100,
  },
});
