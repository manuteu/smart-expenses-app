import createContext from './createContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/api';

const initialState = {};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

const teste = (dispatch: any) => {
  return (args: any) => {
    console.log(args);
  };
};

const createUser = (dispatch: any) => {
  return async (nome: string, email: string, senha: string) => {
    try {
      await api.post('/users/register', {
        nome: nome,
        email: email,
        password: senha,
      });
    } catch (e) {
      console.log(e);
    }
  };
};

const loginUser = (dispatch: any) => {
  return async (email: string, senha: string) => {
    try {
      const userData = await api.post('/users/login', {
        email: email,
        password: senha,
      });

      await AsyncStorage.setItem('token', userData.data.token);
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
