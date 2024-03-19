import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import styles from './styles';

const CampoTexto = (props) => {
  const aoDigitado = (texto) => {
    props.aoAlterado(texto);
  };

  return (
    <View style={styles.campoTexto}>
      <TextInput
        value={props.valor}
        onChangeText={aoDigitado}
        placeholder={props.placeholder}
        style={styles.input}
      />
    </View>
  );
};

export default CampoTexto;
