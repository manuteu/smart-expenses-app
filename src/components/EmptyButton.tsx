import React from 'react';
import {
  TouchableOpacityProps,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export function EmptyButton({ title, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.opacity,
    borderWidth: 1.5,
    borderColor: colors.turquesa,
    height: 43,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: colors.turquesa,
    fontFamily: fonts.heading,
  },
});
