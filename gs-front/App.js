import React, { useEffect, useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { Text, View, StyleSheet, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Home from './pages/Logged/home/index'
import Profile from './pages/Logged/Profile/index'
import Items from './pages/Logged/Items/index'
import Recipes from './pages/Logged/Recipes/index'
import About from './pages/Logged/About/index'
import NotLogged from './pages/NotLogged/Access/index'

export default function App() { 
  const [userToken, setUserToken] = useState(null);

  useEffect(() => {
    AsyncStorage.getItem('userToken').then((token) => {
      setUserToken(token);
    });
  }, [Logged, Logoff]);

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Profile" component={Profile}/>
          <Stack.Screen name="Items" component={Items}/>
          <Stack.Screen name="Recipes" component={Recipes}/>
          <Stack.Screen name="About" component={About}/>
          <Stack.Screen name="NotLogged" component={NotLogged}/>
        </Stack.Navigator>
      </NavigationContainer>
      {/* { userToken ? <Logged/> : <NotLogged/>} */}
    </>
  );
}