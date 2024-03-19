import { StyleSheet } from "react-native";

export default StyleSheet.create({
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