import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { RootStackParamList } from '../../types';

import { Button } from '../components/Button';

import colors from '../styles/colors';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import fonts from '../styles/fonts';

export default function Home({
  navigation,
}: StackScreenProps<RootStackParamList, 'Root'>) {
  const [despesas, setDespesas] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/despesas')
    .then((response) => {
      setDespesas(response.data)
    })
    console.log(despesas)
  }, [])
      
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
