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

type DespesaScreen = {
  nome: string;
  tipo: string;
  preco: number;
  data: Date;
};

export default function DespesaScreen({ navigation }: any) {
  const [nome, setNome] = useState('');
  const [tipo, setTipo] = useState<PickerItem>();
  const [preco, setPreco] = useState('');
  const [dataPagamento, setDataPagamento] = useState('');
  // const [dataVencimento, setDataVencimento] = useState('');

  // const handleText = (): string =>
  //   data ? data.toDateString() : 'No value Selected';

  async function submit() {
    try {
      await axios({
        method: 'POST',
        url: 'https://apismartex.herokuapp.com/api/usuarios',
        data: {
          nome,
          // tipo,
          // preco,
          // dataPagamento,
          // dataVencimento,
        },
      });
      alert('Despesa Cadastrada');
    } catch (error) {
      alert('Erro ao cadastrar despesa...');
    }
    console.log(submit);
  }

  const dados: Array<PickerItem> = [
    { label: 'Alimentação', value: 1 },
    { label: 'Transporte', value: 2 },
    { label: 'Aluguel', value: 3 },
    { label: 'Lazer', value: 4 },
    { label: 'Vestimenta', value: 5 },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior="height">
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
          <View style={styles.forms}>
            <ScrollView
              style={styles.scrollview}
              automaticallyAdjustContentInsets={false}
            >
              <Picker
                style={styles.picker}
                item={tipo}
                items={dados}
                onItemChange={setTipo}
                title="Tipo de Despesas"
                placeholder="Tipo de Despesa"
                isNullable
                backdropAnimation={{
                  opacity: 0.5,
                  duration: 500,
                  delay: 20,
                }}
                textInputStyle={styles.textPicker}
              />

              <TextInput
                style={styles.inputValor}
                placeholder="R$ 0,00"
                placeholderTextColor={colors.concret}
                keyboardType="numeric"
                value={preco}
                onChangeText={setPreco}
              />

              {/* <Text style={styles.textBellowInput}>
                Digite o valor da despesa
              </Text> */}

              <TextInput
                style={styles.inputDataVenc}
                placeholder="Nome"
                placeholderTextColor={colors.concret}
                value={nome}
                onChangeText={setNome}
              />
              <TextInput
                style={styles.inputDataPag}
                placeholder="Data de Pagamento"
                placeholderTextColor={colors.concret}
                value={dataPagamento}
                onChangeText={setDataPagamento}
                keyboardType="numeric"
              />
            </ScrollView>
            <View style={styles.footer}>
              <EmptyButton title="Cadastrar" onPress={submit} />

              <TouchableOpacity onPress={() => navigation.replace('Tab')}>
                <Text style={styles.backButton}>Voltar</Text>
              </TouchableOpacity>
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
    height: '100%',
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
    maxHeight: 260,
  },
  forms: {
    marginHorizontal: '12%',
    marginTop: '20%',
    height: '100%',
  },
  picker: {
    borderBottomWidth: 1,
    borderColor: colors.concret,
    height: '30%',
  },
  textPicker: {
    fontFamily: fonts.text,
    fontSize: 18,
    color: colors.dark_concret,
    textAlign: 'center',
  },
  inputValor: {
    borderBottomWidth: 1,
    borderColor: colors.concret,
    marginTop: -8,
    textAlign: 'center',
    fontSize: 18,
  },
  inputDataPag: {
    borderBottomWidth: 1,
    borderColor: colors.concret,
    marginTop: 42,
    textAlign: 'center',
    fontSize: 18,
  },
  inputDataVenc: {
    borderBottomWidth: 1,
    borderColor: colors.concret,
    marginTop: 42,
    textAlign: 'center',
    fontSize: 18,
  },
  // textBellowInput: {
  //   fontSize: 16,
  //   fontFamily: fonts.heading,
  //   textAlign: 'center',
  //   color: colors.turquesa,
  //   marginTop: 2,
  // },
  footer: {
    width: '100%',
    top: 40,
  },
  backButton: {
    paddingTop: 5,
    textAlign: 'center',
    color: colors.turquesa,
    fontFamily: fonts.heading,
    fontSize: 16,
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
