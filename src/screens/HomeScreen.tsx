import React, {useState, useEffect} from 'react';

import { StackScreenProps } from '@react-navigation/stack';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import { RootStackParamList } from '../../types';
import { Button } from '../components/Button';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import api from '../services/api';

export default function Home({
  navigation,
}: StackScreenProps<RootStackParamList, 'Root'>) {
  const [despesas, setDespesas] = useState([]);
  
    useEffect(() => {
      // api
      // .get('http://localhost:3000/despesas')
      // .then((response) => {
      //   setDespesas(response.data)
      // })
      // .catch((error) => {
      //   alert("Ocorreu um erro ao buscar os items")
      // });    
      async function getItems() {
        try {
          const { data } = await api.get("/despesas");
          setDespesas(data);
        } catch (error) {
          alert("Ocorreu um erro ao buscar os items");
        }
      }
      getItems();  
    }, []);
  
      
  return (
    <View style={styles.container}>
      
        <FlatList 
          data={despesas}          
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View>
              <View style={styles.list}>
                <Text style={styles.listName}>
                  {item.nome} 
                </Text>
                <Text style={styles.listType}>
                  {item.tipo}
                </Text>
              </View>
              <View style={styles.listPrice}>
                <Text>
                  {item.preco} 
                </Text>
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 37,
    backgroundColor: colors.background_light,
  },
  list: {
    marginTop: 20,
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  listName:{
    fontFamily: fonts.text,
    fontSize: 18
  },
  listType:{
    fontFamily: fonts.text,
    fontSize: 18
  },
  listPrice:{
    paddingHorizontal: 30,
    fontFamily: fonts.text,
    fontSize: 14,
    marginBottom: 10,
    textAlign: 'right'
  },
  button: {
    width: '100%',
    bottom: 20
  },
});
