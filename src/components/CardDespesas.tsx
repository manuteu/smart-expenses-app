import React from 'react';
import {
  View,
  Text,
  Animated,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { RectButton } from 'react-native-gesture-handler';
import { Feather, AntDesign } from '@expo/vector-icons';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface DespesaProps extends RectButtonProps {
  data: {
    nome: string;
    valor: number;
    id: number;
  };
}

export const CardDespesas = ({ data }: DespesaProps) => {
  const deleteDespesa = () => {
    fetch(`https://apismartex.herokuapp.com/api/rotas/usuarios/${data.id}`, {
      method: 'delete',
    });
  };

  return (
    <Swipeable
      overshootRight={false}
      renderRightActions={() => (
        <Animated.View>
          <View>
            <RectButton style={styles.buttonRemove} onPress={deleteDespesa}>
              <Feather name="trash" size={22} color={colors.cloud} />
            </RectButton>
          </View>
        </Animated.View>
      )}
    >
      <View style={styles.list}>
        <Text style={styles.listName}>{data.nome}</Text>
        <TouchableOpacity style={styles.setDespesaButton}>
          <Text style={styles.listPrice}>{data.valor}</Text>
          <AntDesign
            name="right"
            size={10}
            color={colors.concret}
            style={styles.iconSet}
          />
        </TouchableOpacity>
      </View>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  list: {
    marginTop: 5,
    paddingVertical: 20,
    paddingHorizontal: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.dark_asphalt,
    borderRadius: 10,
    width: '85%',
    alignSelf: 'center',
  },
  listName: {
    fontWeight: '300',
    fontFamily: fonts.subTitle,
    fontSize: 16,
    color: colors.cloud,
  },
  listPrice: {
    fontFamily: fonts.text,
    fontSize: 14,
    color: colors.cloud,
  },
  setDespesaButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconSet: {
    paddingLeft: 15,
  },
  buttonRemove: {
    width: 70,
    height: 60,
    backgroundColor: colors.dark_red,
    marginTop: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    right: 30,
    paddingLeft: 15,
    marginLeft: -14,
  },
});
