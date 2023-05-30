import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { Text, View, StyleSheet, Image } from 'react-native';
import Logged from './pages/Logged/index'
import NotLogged from './pages/NotLogged/Access/index.js'

export default function App() {
  return (
    <>
      {false? <Logged/> : <NotLogged/>}
    </>
  );
}