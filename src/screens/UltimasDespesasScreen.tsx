import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Animated,
} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { RectButton } from 'react-native-gesture-handler';
import fonts from '../styles/fonts';
import colors from '../styles/colors';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { EmptyButton } from '../components/EmptyButton';
import { Feather } from '@expo/vector-icons';

export type item = {
  nome: string;
  tipo: string;
  valor: number;
  id: number;
};

export default function UltimasDespesasScreen({ navigation }: any) {
  const [despesas, setDespesas] = useState([]);

  useEffect(() => {
    fetch('https://apismartex.herokuapp.com/api/rotas/usuarios')
      .then((resp) => resp.json())
      .then((resp) => {
        setDespesas(resp);
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Últimas {'\n'}Despesas</Text>
        <Image
          style={styles.logo}
          source={require('../../assets/images/Logo.png')}
        />
      </View>
      <Swipeable
        overshootRight={false}
        renderRightActions={() => (
          <Animated.View>
            <View>
              <RectButton style={styles.buttonRemove}>
                <Feather name="trash" size={28} color={colors.cloud} />
              </RectButton>
            </View>
          </Animated.View>
        )}
      >
        <FlatList
          data={despesas}
          keyExtractor={(item: item, index) => item.id.toString()}
          // showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View>
              <View style={styles.list}>
                <Text key={item.id} style={styles.listName}>
                  {item.nome}
                </Text>
                <Text style={styles.listPrice}>{item.valor}</Text>
              </View>
            </View>
          )}
        />
      </Swipeable>
      <EmptyButton title="Voltar" onPress={() => navigation.replace('Tab')} />
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
  // listContainer: {
  //   width: '90%',
  //   backgroundColor: colors.dark_asphalt,
  // },
  list: {
    marginTop: 5,
    paddingVertical: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listName: {
    fontFamily: fonts.text,
    fontSize: 16,
    color: colors.cloud,
  },
  listPrice: {
    fontFamily: fonts.text,
    fontSize: 16,
    color: colors.cloud,
  },
  buttonRemove: {
    width: 100,
    height: 85,
    backgroundColor: colors.dark_red,
    marginTop: 15,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    right: 20,
    paddingLeft: 15,
  },
});
