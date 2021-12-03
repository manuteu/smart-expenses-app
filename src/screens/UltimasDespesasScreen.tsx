import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, Modal } from 'react-native';

import fonts from '../styles/fonts';
import colors from '../styles/colors';
import { EmptyButton } from '../components/EmptyButton';
import { CardDespesas, DespesaProps } from '../components/CardDespesas';
import { ModalDelete } from '../components/ModalDelete';

export type item = {
  nome: string;
  tipo: string;
  valor: number;
  id: number;
};

export default function UltimasDespesasScreen({ navigation }: any) {
  const [despesas, setDespesas] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    fetch('https://apismartex.herokuapp.com/api/rotas/despesas')
      .then((resp) => resp.json())
      .then((resp) => {
        setDespesas(resp);
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);

  const deleteDespesa = (despesa: DespesaProps) => {
    fetch(
      `https://apismartex.herokuapp.com/api/rotas/despesas/${despesa.data.id}`,
      {
        method: 'delete',
      }
    );
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Últimas {'\n'}Despesas</Text>
        <Image
          style={styles.logo}
          source={require('../../assets/images/Logo.png')}
        />
      </View>

      <FlatList
        data={despesas}
        keyExtractor={(item: item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <CardDespesas data={item} deleteModal={() => deleteDespesa} />
        )}
      />
      {/* <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          alert('Modal fechado.');
          setModalVisible(!modalVisible);
        }}
      >
        <ModalDelete
          closeModal={() => setModalVisible(false)}
          deleteDespesa={deleteDespesa}
        />
      </Modal> */}
      <View
        style={{
          // alignItems: 'center',
          alignSelf: 'center',
          justifyContent: 'center',
          width: '8 0%',
          flex: 1,
        }}
      >
        <EmptyButton title="Voltar" onPress={() => navigation.replace('Tab')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.asphalt,
  },
  header: {
    marginTop: '10%',
    color: colors.header,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  title: {
    color: colors.cloud,
    fontFamily: fonts.heading,
    fontSize: 32,
    paddingLeft: 40,
    marginTop: '5%',
    lineHeight: 45,
  },
  logo: {
    height: 120,
    width: 120,
    marginRight: 16,
  },
});
