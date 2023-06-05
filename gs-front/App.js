import React, { useEffect, useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { Text, View, StyleSheet, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Logged from './pages/Logged/index'
import NotLogged from './pages/NotLogged/Access/index.js'
import Logoff from './pages/Logged/Logoff';

export default function App() { 
  const [userToken, setUserToken] = useState(null);

  useEffect(() => {
    AsyncStorage.getItem('userToken').then((token) => {
      setUserToken(token);
    });
  }, [Logged, Logoff]);

  return (
    <>
      { userToken ? <Logged/> : <NotLogged/>}
    </>
  );
}