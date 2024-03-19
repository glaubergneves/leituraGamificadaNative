import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

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

const styles = StyleSheet.create({
  campoTexto: {
    marginVertical: 12,
  },
  input: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.06,
    width: '100%',
    fontSize: 12,
    padding: 12,
    borderRadius: 10,
  },
});

export default CampoTexto;
