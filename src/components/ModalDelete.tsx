import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

import { DespesaProps } from './CardDespesas';

import { RectButtonProps } from 'react-native-gesture-handler';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

// interface DespesaProps {
//   data: {
//     nome: string;
//     valor: number;
//     id: number;
//   };
// }
// export type data = {
//   nome: string;
//   valor: number;
//   id: number;
// };
interface ModalDespesa {
  deleteDespesa: (despesa: DespesaProps) => void;
  closeModal: () => void;
}

export const ModalDelete = ({ deleteDespesa, closeModal }: ModalDespesa) =>
  // { data }: DespesaProps
  {
    // const [modalVisible, setModalVisible] = useState(false);

    // const deleteDespesa = () => {
    //   fetch(`https://apismartex.herokuapp.com/api/rotas/usuarios/${data.id}`, {
    //     method: 'delete',
    //   });
    //   setModalVisible(false);
    // };

    return (
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.title}>Deseja mesmo excluir a despesa ?</Text>
          {/* <Text>{data.nome}</Text> */}
          {/* <Text>?</Text> */}
          <View style={styles.buttonsContainer}>
            <Pressable onPress={closeModal} style={styles.buttons}>
              <Text style={styles.cancelButton}>Cancelar</Text>
            </Pressable>
            <Pressable onPress={() => deleteDespesa} style={styles.buttons}>
              <Text style={styles.deleteButton}>Excluir</Text>
            </Pressable>
          </View>
        </View>
      </View>
    );
  };

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: colors.asphalt,
    borderRadius: 10,
    height: '30%',
    width: '70%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    color: colors.cloud,
    marginTop: 50,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttons: {
    backgroundColor: colors.dark_asphalt,
    // padding: 20,
    height: 40,
    width: 96,
    marginHorizontal: 14,
    borderRadius: 7,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButton: {
    color: colors.cloud,
    fontFamily: fonts.text,
  },
  deleteButton: {
    color: colors.dark_red,
  },
});
