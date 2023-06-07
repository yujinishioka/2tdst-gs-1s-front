import React, { useState, useEffect } from 'react';
import { Button, FlatList, Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableHighlight } from 'react-native';
import api from '../../../api'

const {Screen, Navigator} = createBottomTabNavigator();

export default function App() {
  const [showForm, setShowForm] = useState(false);
  const [listaAlimento, setListaAlimento] = useState([]);
  const [contador, setContador] = useState(1);

  const Cadastro = (props) => {
    const [nome, setNome] = useState("");
    const [tempo, setTempo] = useState("");
    const [ingredientes, setIngredientes] = useState("");
    const [dificuldade, setDificuldade] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [receitaCriada, setReceitaCriada] = useState(false);
    const [receita, setReceita] = useState({
      titulo: "Receita",
      ingredientes: [],
      modoPreparo: "",
      tempoPreparo: "",
      dificuldade: ""
    })
    const niveisDificuldade = [
      "facil", 
      "medio", 
      "dificil"
    ];

    const adicionarItem = (item) => {
      setListaAlimento([...listaAlimento, item]);
    };

    const Receita = ( props ) => {
      return(
        <View> 
          { receitaCriada && (
            <View>
              <Text style={{color:"white"}}>{receita.titulo}</Text>
              <Text style={{color:"white"}}>Lista de ingredientes:</Text>
              {(receita.ingredientes).map((ingrediente, index) => {
                return (
                  <View key={index}>
                    <Text style={{color:"white"}}>Ingrediente: {ingrediente.nome}</Text>
                    <Text style={{color:"white"}}>Quantidade: {ingrediente.quantidade}</Text>
                  </View>
                )
              })}
              <Text style={{color:"white"}}>Modo de Preparo:</Text>
              <Text style={{color:"white"}}>{receita.modoPreparo}</Text>
              <Text style={{color:"white"}}>Tempo de Preparo: {receita.tempoPreparo}</Text>
              <Text style={{color:"white"}}>Dificuldade: {receita.dificuldade}</Text>
            </View>
          )}
        </View>
      )
    }

    return (
      <>
        { isLoading ?
          <View>
          </View>
          : 
          <View style={styles.container}>
            <Text style={styles.link} onPress={() => { setShowForm(false) }}>Receitas</Text>
            <View style={styles.center}>
              <Text style={styles.titleCard}>Gerar Receitas</Text>
            </View>
            <View style={styles.form}>
              <Text style={styles.label}>Ingredientes</Text>
              <TextInput
                style={styles.input}
                value={ingredientes}
                onChangeText={setIngredientes}
                placeholder="Selecione o tempo"
              />
              <Text style={styles.label}>Tempo em minutos</Text>
              <TextInput
                style={styles.input}
                value={tempo}
                onChangeText={setTempo}
                placeholder="Selecione o tempo"
              />
              <Text style={styles.label}>Dificuldade</Text>
              <SelectDropdown
                data={niveisDificuldade}
                value={dificuldade}
                onSelect={(selectedItem, index) => {
                  setDificuldade(selectedItem);
                }}
              />
              <View style={{ flex: 1, alignItems: "center" }}>
                <TouchableOpacity style={styles.buttonPrimary} onPress={() => {
                  const obj = { ingredientes, tempo, dificuldade };
                  setIsLoading(true);
                  AsyncStorage.getItem("userToken").then((token) => {
                    api.post('/message', {
                        "question": obj.ingredientes
                      }, {
                      headers: {
                        'Authorization': `Bearer ${token}`
                      }
                    }).then((resp) => {
                      setReceita({
                        titulo: resp.data.titulo,
                        ingredientes: resp.data.ingredientes,
                        modoPreparo: resp.data.modoPreparo,
                        tempoPreparo: resp.data.tempoPreparo,
                        dificuldade: resp.data.dificuldade
                      });
                      setReceitaCriada(true);
                      alert(`Receita criada com sucesso.`);
                      setIsLoading(false);
                    }).catch((err) => {
                      alert(`Erro: ${err}`);
                      setIsLoading(false);
                    })
                  });
                }}>
                  <Text>Gerar</Text>
                </TouchableOpacity>
              </View>
            </View>
            <Receita receita={receita}/>
          </View>
        }
      </>
    );
  }

  const Item = (props) => {
    return (
      <View style={styles.card}>
        <View style={{flex: 7}}>
          <Text style={styles.titleCard}>{props.item.nome}</Text>
          <Text style={styles.text}>Tipo: {props.item.tipo}</Text>
          <Text style={styles.text}>Preco: {props.item.preco}</Text>
          <Text style={styles.text}>items: {props.item.items}</Text>
          {/* <View style={styles.vitamins}>
            <Text style={styles.vitaminD}>D</Text>
            <Text style={styles.vitaminA}>A</Text>
            <Text style={styles.vitaminB2}>B2</Text>
            <Text style={styles.vitaminB12}>B12</Text>
          </View> */}
        </View>
        <View style={styles.iconsCard}>
          <TouchableHighlight onPress={()=>{
            props.onApagar(props.item.id);
          }}>
            <MaterialIcons name="delete" style={styles.iconCard}/>
          </TouchableHighlight>
          <MaterialIcons name="edit" style={styles.iconCard}/>
        </View>
      </View>
    )
  }

  const Listagem = (props) => { 
    return (
      <View style={styles.container}>
        <Text style={styles.link} onPress={()=>{setShowForm(true)}}>Cadastrar Receitas</Text>
        <View style={styles.center}>
          <Text style={styles.titleCard}>Receitas</Text>
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
      <View style={{flex:1}}>
      { showForm ? (//showForm
        <Cadastro/>
      ):
      (
        <Listagem lista={listaAlimento} onApagar={apagar}/>
      )}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:30,
    backgroundColor:"#121214",
    height:"100%"
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
    backgroundColor:"#d966a3",
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
    backgroundColor:"#c56f2f",
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
    backgroundColor:"#1777bb",
    color: "#ffffff80",
    shadowColor: "#1777bb",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  form: {
    display:'flex',
    backgroundColor:'#26262a',
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
    backgroundColor:"#121214",
    color:'#ffffff80',
    borderRadius:8,
    marginTop:12,
    marginBottom:12,
    paddingLeft: 15
  },
  inputFilter: {
    width: '100%',
    height: 40,
    backgroundColor:"#26262a",
    color:'#ffffff80',
    borderRadius:8,
    marginTop:12,
    marginBottom:12,
    paddingLeft: 15
  },
  buttonPrimary: {
    width:110,
    height:45,
    textAlign:'center',
    justifyContent:'center',
    borderRadius: 15,
    backgroundColor:'#fe8f00'
  }
});