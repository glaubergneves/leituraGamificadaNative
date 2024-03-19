import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

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

export default CardBook;
