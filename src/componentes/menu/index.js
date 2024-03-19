import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import BookListPage from '../../telas/bookListPage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Menu = ({ navigation }) => {
  return (
    <View style={styles.topbar}>
      <View style={styles.topbarInner}>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Página Inicial</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}
        onPress={() => navigation.navigate('BookListPage')}>
          <Text style={styles.menuText}>Lista de Livros</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topbar: {
    backgroundColor: '#333',
    padding: 10,
  },
  topbarInner: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 1200,
    marginHorizontal: 'auto',
  },
  menuItem: {
    marginHorizontal: 20,
  },
  menuText: {
    color: '#fff',
    textDecorationLine: 'none',
  },
});

export default Menu;
