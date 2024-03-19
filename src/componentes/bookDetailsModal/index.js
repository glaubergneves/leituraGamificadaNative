import React from "react";
import { View, Text, Modal, Button, StyleSheet } from "react-native";

const BookDetailsModal = ({ book, onClose }) => {
  return (
    <Modal
      visible={!!book}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)"
        }}
      >
        <View
          style={{ backgroundColor: "#fff", padding: 20, borderRadius: 10 }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
            {book?.title}
          </Text>
          <Text>Autor: {book?.author}</Text>
          <Text>Gênero: {book?.genre}</Text>
          <Text>Páginas: {book?.pages}</Text>
          <Text>Idioma: {book?.language}</Text>
          <Text>Sinopse: {book?.synopsis}</Text>
          <Text>Nota: {book?.rating}</Text>
          <Button title="Fechar" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
};

export default BookDetailsModal;
