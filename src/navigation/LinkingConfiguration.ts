/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Metas: {
            screens: {
              MetasScreen: 'metas',
            },
          },
          Despesa: {
            screens: {
              DespesaScreen: 'despesas',
            },
          },
          Home: {
            screens: {
              HomeScreen: 'home',
            },
          },
          SaveMoney: {
            screens: {
              SaveMoneyScreen: 'savemoney',
            },
          },
          Perfil: {
            screens: {
              PerfilScreen: 'perfil',
            },
          },
          NotFound: '*',
        },
      },
    },
  },
};
