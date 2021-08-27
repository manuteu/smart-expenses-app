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

export default function DespesaScreen() {
  // const [nome, setNome] = useState('');
  const [tipo, setTipo] = useState<PickerItem>();
  const [preco, setPreco] = useState('');
  const [dataPagamento, setDataPagamento] = useState('');
  const [dataVencimento, setDataVencimento] = useState('');

  // const handleText = (): string =>
  //   data ? data.toDateString() : 'No value Selected';

  async function submit() {
    try {
      await axios({
        method: 'POST',
        url: 'http://localhost:3000/despesas',
        data: {
          tipo,
          preco,
          dataPagamento,
          dataVencimento,
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
        <KeyboardAvoidingView behavior="padding">
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
          <ScrollView style={styles.scrollview}>
            <View style={styles.forms}>
              <View>
                <Picker
                  style={styles.picker}
                  item={tipo}
                  items={dados}
                  onItemChange={setTipo}
                  title="Tipo de Despesas"
                  placeholder="Tipo de Despesa"
                  isNullable
                  backdropAnimation={{
                    opacity: 0.8,
                    duration: 500,
                    delay: 150,
                  }}
                  textInputStyle={styles.textPicker}
                />
              </View>
              <View>
                <TextInput
                  style={styles.inputs}
                  placeholder="R$ 0,00"
                  placeholderTextColor={colors.concret}
                  keyboardType="numeric"
                  value={preco}
                  onChangeText={setPreco}
                />
                <View>
                  <Text style={styles.textBellowInput}>
                    Digite o valor da despesa
                  </Text>
                </View>
              </View>
              <View>
                <TextInput
                  style={styles.inputsData}
                  placeholder="Data de Pagamento"
                  placeholderTextColor={colors.concret}
                  value={dataPagamento}
                  onChangeText={setDataPagamento}
                />
                <TextInput
                  style={styles.inputsData}
                  placeholder="Data de Vencimento"
                  placeholderTextColor={colors.concret}
                  value={dataVencimento}
                  onChangeText={setDataVencimento}
                />
              </View>
            </View>
            <View style={styles.footer}>
              <EmptyButton title="Cadastrar" onPress={submit} />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: '100%',
    // width: '100%',
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
    fontSize: 28,
    fontFamily: fonts.heading,
    color: colors.header,
    marginTop: 7,
  },
  logo: {
    height: 120,
    width: 120,
  },
  scrollview: {
    height: '100%',
  },
  forms: {
    // flex: 1,
    // backgroundColor: colors.green,
    marginHorizontal: '12%',
    marginTop: '10%',
    // height: '55%',
  },
  picker: {
    borderBottomWidth: 1,
    borderColor: colors.concret,
    marginBottom: -30,
  },
  textPicker: {
    fontFamily: fonts.text,
    fontSize: 18,
    color: colors.dark_concret,
    textAlign: 'center',
  },
  inputs: {
    borderBottomWidth: 1,
    borderColor: colors.concret,
    fontFamily: fonts.text,
    fontSize: 18,
    textAlign: 'center',
    position: 'absolute',
    width: '100%',
    marginTop: -35,
  },
  textBellowInput: {
    fontSize: 16,
    fontFamily: fonts.heading,
    color: colors.turquesa,
    marginTop: -8,
    textAlign: 'center',
  },
  inputsData: {
    borderBottomWidth: 1,
    borderColor: colors.concret,
    fontFamily: fonts.text,
    fontSize: 18,
    textAlign: 'center',
    marginTop: 40,
  },
  footer: {
    // position: 'absolute',
    width: '80%',
    alignSelf: 'center',
    marginTop: '20%',
  },
});

{
  // Picker antigo
  /* <Picker
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
</Picker> */
}
