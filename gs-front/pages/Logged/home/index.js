import React, { useState, useEffect } from 'react';
import { Button, FlatList, Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableHighlight } from 'react-native';

const {Screen, Navigator} = createBottomTabNavigator();


export default function App() {
  const [showForm, setShowForm] = useState(false);
  const [listaAlimento, setListaAlimento] = useState([]);
  const [contador, setContador] = useState(1);


const Item = (props) => {
  return (
    <View style={styles.card}>
      <View style={{flex: 7}}>
        <Text style={styles.titleCard}>{props.item.nome}</Text>
        <Text style={styles.text}>Tipo: {props.item.tipo}</Text>
        <Text style={styles.text}>Preco: {props.item.preco}</Text>
        <Text style={styles.text}>Quantidade: {props.item.quantidade}</Text>
        <View style={styles.vitamins}>
          <Text style={styles.vitaminD}>D</Text>
          <Text style={styles.vitaminA}>A</Text>
          <Text style={styles.vitaminB2}>B2</Text>
          <Text style={styles.vitaminB12}>B12</Text>
        </View>
      </View>
    </View>
  )
}

const Listagem = (props) => { 
  return (
    <View style={styles.container}>
      <View style={styles.center}>
        <Text style={styles.titleCard}>Receitas Globais</Text>
      </View>
      <TextInput style={styles.inputFilter} placeholder="filtrar..."/>

      <View style={styles.card}>
        <View style={{flex: 7}}>
          <Text style={styles.titleCard}>Barra Cereal</Text>
          <Text style={styles.text}>Tipo: natural</Text>
          <Text style={styles.text}>Preco: $10.00</Text>
          <Text style={styles.text}>Itens: Granola, ovo, farinha...</Text>
          <Text style={styles.text}>VITAMINAS</Text>
          <View style={styles.vitamins}>
            <Text style={styles.vitaminD}>D</Text>
            <Text style={styles.vitaminA}>A</Text>
            <Text style={styles.vitaminB2}>B2</Text>
            <Text style={styles.vitaminB12}>B12</Text>
          </View>
        </View>
      </View>

      <FlatList data={props.lista} renderItem={
        (propsItem)=><Item {...propsItem} onApagar={props.onApagar}/>}/>
    </View>
  )
}


  const apagar = ( id ) => { 
    const novaLista = [];
    for (let i = 0; i < listaAlimento.length; i++) { 
      const obj = listaAlimento[i];
      if (obj.id !== id) { 
        novaLista.push(obj);
      }
    }
    setListaAlimento(novaLista);
  }

  return (
      <Listagem lista={listaAlimento} onApagar={apagar}/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:30,
    backgroundColor:"#121214",
  },
  card: {
    flexDirection: "row",
    justifyContent:"space-between",
    backgroundColor:"#26262a",
    borderColor: "#26262a",
    borderWidth: 2, 
    marginBottom: 10, 
    padding: 10, 
    borderRadius:10
  },
  center:{
    felx:1,
    alignItems:"center"
  },
  link:{
    textDecorationLine:'underline',
    textDecorationColor:'#fe8f00bd',
    fontSize:15,
    color:'#ffffffa6',
  },
  titleCard: {
    color: "#ffffffd1",
    marginVertical:6,
    fontSize:25
  },
  text: {
    color: "#ffffff80",
    fontSize:15
  },
  iconsCard: {
    flexDirection:"row",
    color: "#ffffff80",
    fontSize:15
  },
  iconCard: {
    fontSize:25,
    color: "#ffffff80",
    padding:5
  },
  vitamins:{
    flexDirection:"row",
    marginTop:10
  },
  vitaminD:{
  display: "flex",
  marginRight: 5,
  borderRadius: 50,
  justifyContent: "center",
  alignItems: "center",
  width: 30,
  height: 30,
  color: "#ffffff80",
  backgroundColor: "#1741bb",
  shadowColor: "#1741bb",
  shadowOpacity: 0.3,
  shadowRadius: 10,
  elevation: 5,
  },
  vitaminA:{
    display:"flex",
    marginRight:5,
    borderRadius:50,
    justifyContent:"center",
    alignItems:"center",
    width:30,
    height:30,
    background:"#d966a3",
    color: "#ffffff80",
    shadowColor: "#d966a3",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  vitaminB2:{
    display:"flex",
    marginRight:5,
    borderRadius:50,
    justifyContent:"center",
    alignItems:"center",
    width:30,
    height:30,
    background:"#c56f2f",
    color: "#ffffff80",
    shadowColor: "#c56f2f",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  vitaminB12:{
    display:"flex",
    marginRight:5,
    borderRadius:50,
    justifyContent:"center",
    alignItems:"center",
    width:30,
    height:30,
    background:"#1777bb",
    color: "#ffffff80",
    shadowColor: "#1777bb",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  form: {
    display:'flex',
    background:'#26262a',
    padding:20,
    borderRadius:25
  },
  label:{
    color:"#ffffffd1",
    fontSize:15
  },
  input: {
    width: '100%',
    height: 40,
    background:"#121214",
    color:'#ffffff80',
    borderRadius:8,
    marginTop:12,
    marginBottom:12,
    padding: '0 0 0 15px'
  },
  inputFilter: {
    width: '100%',
    height: 40,
    background:"#26262a",
    color:'#ffffff80',
    borderRadius:8,
    marginTop:12,
    marginBottom:12,
    padding: '0 0 0 15px'
  },
  buttonPrimary: {
    width:110,
    height:45,
    textAlign:'center',
    justifyContent:'center',
    borderRadius: 15,
    background:'#fe8f00'
  }
});