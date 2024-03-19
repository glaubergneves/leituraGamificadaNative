import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CardBook from '../cardBook';

const BookList = ({ books }) => {
  if (!Array.isArray(books)) {
    return <Text>Loading...</Text>; 
  }

  return (
    <View style={styles.bookList}>
      {books.map(book => (
        <CardBook key={book.ISBN} book={book}></CardBook>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  bookList: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
});

export default BookList;
