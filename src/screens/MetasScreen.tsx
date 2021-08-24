import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Picker } from '@react-native-picker/picker';
import colors from '../styles/colors';

export default function Metas() {
  const [selectedValue, setSelectedValue] = useState();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Metas</Text>
      <Picker
        style={styles.picker}
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item key={0} label="Alimentação" value="Alimentação" />
        <Picker.Item key={1} label="Transporte" value="Transporte" />
        <Picker.Item key={2} label="Aluguel" value="Aluguel" />
      </Picker>
      <Text>Categoria {selectedValue}</Text>
      <View />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  picker: {
    width: '70%',
    height: 50,
  },
});
