import React, { useEffect, useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { Text, View, StyleSheet, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Logged from './pages/Logged/index'
import NotLogged from './pages/NotLogged/Access/index.js'
import Logoff from './pages/Logged/Logoff';

export default function App() { 
  const [userToken, setUserToken] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      { isLoggedIn ? <Logged onLogout={handleLogout}/> : <NotLogged onLogin={handleLogin}/>}
    </>
  );
}