import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { PieChart } from 'react-native-chart-kit';

import colors from '../styles/colors';

const screenWidth = Dimensions.get('window').width;

const data = [
  {
    name: 'Alimentação',
    value: 200,
    color: colors.green,
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Aluguel',
    value: 800,
    color: colors.dark_green,
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Combustível',
    value: 500,
    color: colors.turquesa,
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Lazer',
    value: 200,
    color: colors.dark_turquesa,
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Dízimo',
    value: 300,
    color: colors.blue,
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Codguin',
    value: 100,
    color: colors.dark_blue,
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
];

const chartConfig = {
  backgroundGradientFrom: '#1E2923',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#08130D',
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};
export default function Perfil() {
  return (
    <View style={styles.container}>
      <PieChart
        data={data}
        width={screenWidth}
        height={180}
        chartConfig={chartConfig}
        accessor={'value'}
        backgroundColor={colors.dark_asphalt}
        style={{ borderRadius: 4 }}
        paddingLeft={'0'}
        center={[5, 0]}
      />

      <View style={styles.separator} />
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
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
