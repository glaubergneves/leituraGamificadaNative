import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CardBook from '../cardBook';
import styles from './styles';

const BookList = ({ books, onViewDetails }) => {
  if (!Array.isArray(books)) {
    return <Text>Loading...</Text>; 
  }

  return (
    <View style={styles.bookList}>
      {books.map(book => (
        <CardBook key={book.ISBN} book={book} onPress={() => onViewDetails(book)}></CardBook>
      ))}
    </View>
  );
};

export default BookList;
