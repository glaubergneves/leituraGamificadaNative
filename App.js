import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Menu from './src/componentes/menu';
import BookListPage from './src/telas/bookListPage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="BookListPage" component={BookListPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
