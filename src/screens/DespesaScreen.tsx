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
  Dimensions,
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
import { ScreenHeight } from 'react-native-elements/dist/helpers';
import { useNavigation } from '@react-navigation/native';

// export type valores = {
//   nomeDespesa: string;
//   tpDespesa: string;
//   valorDespesa: number;
//   data: Date;
// };

export default function DespesaScreen() {
  const [tipo, setTipo] = useState<PickerItem>();
  const [valor, setValor] = useState('');
  const [nome, setNome] = useState('');

  const navigation = useNavigation();

  const submit = async () => {
    try {
      if (nome != null && valor != null && tipo != null) {
        fetch('https://apismartex.herokuapp.com/api/rotas/despesas', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nome: nome,
            valor: valor,
            tipo: tipo?.label,
          }),
        });
        alert('Despesa Cadastrada! 😀');
        navigation.navigate('Tab');
      } else {
        alert('Não deixe campo em BRANCO! 😑');
      }
    } catch (error) {
      alert(error);
    }
  };

  const dados: Array<PickerItem> = [
    { label: 'Alimentação', value: 1 },
    { label: 'Transporte', value: 2 },
    { label: 'Aluguel', value: 3 },
    { label: 'Lazer', value: 4 },
    { label: 'Shopping', value: 5 },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior="padding">
          <View style={styles.header}>
            <View>
              <Text style={styles.title}>
                Cadastro {'\n'}
                de {'\n'}
                Despesa
              </Text>
            </View>
            <Image
              style={styles.logo}
              source={require('../../assets/images/Logo.png')}
            />
          </View>
          <View style={styles.forms}>
            <ScrollView>
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
                value={valor}
                onChangeText={setValor}
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
              {/* <TextInput
                style={styles.inputDataPag}
                placeholder="Data de Pagamento"
                placeholderTextColor={colors.concret}
                value={dataPagamento}
                onChangeText={setDataPagamento}
                keyboardType="numeric"
              /> */}
              <View style={styles.footer}>
                <EmptyButton title="Cadastrar" onPress={submit} />

                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Text style={styles.backButton}>Voltar</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
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
    paddingHorizontal: 37,
    backgroundColor: colors.background_light,
  },
  header: {
    marginTop: '5%',
    marginLeft: 13,
    color: colors.header,
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
  forms: {
    paddingTop: 100,
    width: '100%',
    minHeight: ScreenHeight,
  },
  picker: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: colors.concret,
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
    marginTop: 42,
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
  footer: {
    position: 'relative',
    marginTop: 70,
    width: '100%',
  },
  backButton: {
    paddingTop: 5,
    textAlign: 'center',
    color: colors.turquesa,
    fontFamily: fonts.heading,
    fontSize: 16,
  },
});
