import createContext from './createContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/api';

const initialState = {};

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const teste = (dispatch) => {
  return (args) => {
    console.log(args);
  };
};

const createUser = (dispatch) => {
  return async (nome, email, senha) => {
    try {
      await api.post('/cadastro', {
        nome: nome,
        email: email,
        senha: senha,
      });
    } catch (e) {
      console.log(e);
    }
  };
};

const loginUser = (dispatch) => {
  return async (email, senha) => {
    try {
      const userData = await api.post('/login', {
        email: email,
        senha: senha,
      });

      await AsyncStorage.setItem('id', userData.data.token);

      const id = await AsyncStorage.getItem('id');
      console.log(id);

      console.log(userData.data);
    } catch (e) {
      console.log(e);
    }
  };
};

export const { Context, Provider } = createContext(
  reducer,
  { teste, createUser, loginUser },
  initialState
);
