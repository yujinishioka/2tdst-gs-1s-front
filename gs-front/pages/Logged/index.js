import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { Text, View, StyleSheet, Image } from 'react-native';
import {createDrawerNavigator, DrawerItems} from '@react-navigation/drawer';

import Home from './home/index';
import Profile from './Profile/index';
import Items from './Items/index';
import Recipes from './Recipes/index';
import About from './About/index';
import Logoff from './Logoff';

const {Navigator, Screen} = createDrawerNavigator();
const FuncHome = () => <Home/>
const FuncProfile = () => <Profile/>
const FuncItems = () => <Items/>
const FuncRecipes = () => <Recipes/>
const FuncAbout = () => <About/>

export default function App({onLogout}) {
  return (
    <NavigationContainer drawerItemStyle={styles.drawerItem} style={styles.drawerItem}>
      <View style={styles.container}>
      <Navigator useLegacyImplementation>
        <Screen name="Home" component={FuncHome}/>
        <Screen name="Perfil" component={FuncProfile}/>
        <Screen name="Itens" component={FuncItems}/>
        <Screen name="Receitas" component={FuncRecipes}/>
        <Screen name="Sobre" component={FuncAbout}/>
        {/* <Screen name="Sair" component={Logoff}/> */}
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
