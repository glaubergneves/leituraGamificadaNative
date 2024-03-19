import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Menu from "./src/componentes/menu";
import BookListPage from "./src/telas/bookListPage";
import Login from "./src/telas/login";
import Cadastro from "./src/telas/cadastro";
import { auth } from './src/config/firebase';

const Stack = createStackNavigator();

const App = () => {
  const usuario = auth.currentUser;

  function deslogar(){
    auth.signOut();
    navigation.replace('Login');
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Menu" component={Menu} initialParams={{ logout: deslogar }} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="BookListPage" component={BookListPage} />
      </Stack.Navigator>
      <View>
        <Text>Usuário: {usuario?.email}</Text>
      </View>
    </NavigationContainer>
  );
};

export default App;
