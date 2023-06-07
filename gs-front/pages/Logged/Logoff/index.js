import React, {useEffect} from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import NotLogged from '../../NotLogged/Access/index'

export default function Logoff({onLogout}) {
    useEffect(() => {
        AsyncStorage.removeItem('userToken');
        onLogout();
    }, []);

    return (
        <>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red'
    }
})