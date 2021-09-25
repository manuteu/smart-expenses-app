import React, { useState, useEffect } from 'react';

import { StyleSheet, Text, View, FlatList } from 'react-native';

import { Button } from '../components/Button';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import api from '../services/api';
import { SafeAreaView } from 'react-native-safe-area-context';

export type item = {
  nome: String;
  tipo: String;
  preco: Number;
  id: number;
};

export default function Home({ navigation }: any) {
  const [despesas, setDespesas] = useState([]);

  useEffect(() => {
    api
      .get('/api/rotas/usuarios')
      .then((response) => {
        setDespesas(response.data);
      })
      .catch((error) => {
        alert('Ocorreu um erro ao buscar os items');
      });
    const getItems = async () => {
      try {
        const { data } = await api.get('https://apismartex.herokuapp.com/');
        console.log(data);
        setDespesas(data);
        alert('Sucesso na requisição');
      } catch (error) {
        alert('Ocorreu um erro ao buscar os items');
      }
    };
    getItems();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.initialBox}>
          <Text style={styles.title}>Boa noite, Usuário</Text>
          <View style={styles.value}>
            <Text style={styles.cifrao}>R$</Text>
            <Text style={styles.currentMoney}>2.611,00</Text>
          </View>
          <Text style={styles.subTitle}>Saldo geral</Text>
        </View>
        <FlatList
          data={despesas}
          keyExtractor={(item: any, index: number) => item.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.listContainer}>
              <View style={styles.list}>
                <Text style={styles.listName}>{item}</Text>
                <Text style={styles.listType}>{item}</Text>
              </View>
              <View style={styles.listPrice}>
                <Text>{item}</Text>
              </View>
            </View>
          )}
        />
        <View style={styles.button}>
          <Button
            title="Ir para Login"
            onPress={() => navigation.replace('Login')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '5%',
    backgroundColor: colors.asphalt,
  },
  initialBox: {
    backgroundColor: colors.dark_asphalt,
    padding: 15,
    marginTop: '5%',
    borderRadius: 10,
  },
  title: {
    fontFamily: fonts.text,
    fontSize: 18,
    color: colors.cloud,
    textAlign: 'center',
    paddingVertical: 6,
  },
  value: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  cifrao: {
    fontFamily: fonts.text,
    fontSize: 11,
    paddingVertical: 10,
    marginTop: 7,
    marginRight: 4,
    color: colors.concret,
    textAlign: 'center',
    flexDirection: 'row',
  },
  currentMoney: {
    textAlign: 'center',
    fontFamily: fonts.heading,
    color: colors.cloud,
    fontSize: 22,
    paddingVertical: 6,
  },
  subTitle: {
    textAlign: 'center',
    fontFamily: fonts.text,
    color: colors.cloud,
    fontSize: 16,
    paddingVertical: 6,
  },

  listContainer: {
    backgroundColor: colors.dark_asphalt,
    borderRadius: 10,
    marginTop: 10,
  },
  list: {
    marginTop: 20,
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listName: {
    fontFamily: fonts.text,
    fontSize: 18,
    color: colors.cloud,
  },
  listType: {
    fontFamily: fonts.text,
    fontSize: 18,
    color: colors.cloud,
  },
  listPrice: {
    paddingHorizontal: 30,
    fontFamily: fonts.text,
    fontSize: 14,
    marginBottom: 10,
    textAlign: 'right',
    color: colors.cloud,
  },
  button: {
    flex: 1,
    width: '100%',
    // bottom: 50,
  },
});
