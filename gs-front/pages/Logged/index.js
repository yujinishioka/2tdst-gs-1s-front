import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { View, StyleSheet } from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Home from './home/index';
import Profile from './Profile/index';
import Items from './Items/index';
import Recipes from './Recipes/index';
import About from './About/index';

const {Navigator, Screen} = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer drawerItemStyle={styles.drawerItem} style={styles.drawerItem}>
      <View style={styles.container}>
      <Navigator useLegacyImplementation>
        <Screen name="Home" component={Home}/>
        <Screen name="Perfil" component={Profile}/>
        <Screen name="Itens" component={Items}/>
        <Screen name="Recipes" component={Recipes}/>
        <Screen name="Sobre" component={About}/>
      </Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"red",
  },
  drawerItem:{
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
  }
});
