import React from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';
import maskRenda from '../utils/masks';

interface InputProps extends TextInputProps {
  mask: 'renda';
  inputMaskChange: any;
}

const Input: React.FC<InputProps> = ({ mask, inputMaskChange, ...rest }) => {
  function handleChange(text: string) {
    const value = maskRenda(text);
    inputMaskChange(value);
  }

  return (
    <>
      <TextInput
        style={styles.input}
        {...rest}
        onChangeText={(text) => handleChange(text)}
      />
    </>
  );
};

const styles = StyleSheet.create({
  input: {},
});

export default Input;
