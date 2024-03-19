import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import styles from "./styles";

const Menu = ({ navigation, logout }) => {
  return (
    <View style={styles.topbar}>
      <View style={styles.topbarInner}>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.menuText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("Cadastro")}
        >
          <Text style={styles.menuText}>Cadastro</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("BookListPage")}
        >
          <Text style={styles.menuText}>Lista de Livros</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={logout}>
        <Icon 
          name={'log-out'} 
          size={20} 
          color="#FFF"
        />
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default Menu;
