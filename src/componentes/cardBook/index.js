import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const CardBook = ({ book, onPress }) => {
  return (
    <View style={styles.cardBook}>
      <Image source={{ uri: book?.cover }} style={styles.coverImage} />
      <Text style={styles.title}>{book.title}</Text>
      <Text>Autor: {book.author}</Text>
      <Text>Páginas: {book.pages}</Text>
      <Text><Text style={styles.priceLabel}>Por apenas: </Text>{book.price}</Text>
      <TouchableOpacity style={styles.button} onPress={() => onPress(book)}>
        <Text style={styles.buttonText}>Ver detalhes</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardBook: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 20,
    marginBottom: 20,
  },
  coverImage: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
  title: {
    marginTop: 10,
    marginBottom: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  priceLabel: {
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CardBook;
