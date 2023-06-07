import * as React from 'react';
import { Text, View, ScrollView, StyleSheet, Image } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <View style={{alignItems:"center"}}>
          <Image style={{width: 120, height: 138}} source={require('../../../assets/logo.png')}/>
        </View>
        <Text style={styles.title}>
          José Marreta
        </Text>
        <Text style={styles.text}>
          Configurações do usuário e perfil
        </Text>
      </View>
      <View style={styles.rowContainer}>
        <View style={[styles.miniCard, { flex: 1 }]}>
          <Text style={styles.title}>Itens</Text>
          <Text style={styles.text}>10</Text>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={[styles.miniCard, { flex: 0.5, borderWidth:2, borderColor:"#ff5e00ba" }]}>
          <Text style={styles.title}>30%</Text>
          <Text style={styles.text}>3 nao consumido(s)</Text>
        </View>
        <View style={{margin:5}}></View>
        <View style={[styles.miniCard, { flex: 0.5, borderWidth:2, borderColor:"#00ff668f" }]}>
          <Text style={styles.title}>60%</Text>
          <Text style={styles.text}>6 consumido(s)</Text>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={[styles.miniCard, { flex: 0.5, borderWidth:2, borderColor:"#ff5e00ba"}]}>
          <Text style={styles.title}>10%</Text>
          <Text style={styles.text}>1 Desperdiçado(s)</Text>
        </View>
        <View style={{margin:5}}></View>
        <View style={[styles.miniCard, { flex: 0.5, borderWidth:2, borderColor:"#00ff668f" }]}>
          <Text style={styles.title}>80%</Text>
          <Text style={styles.text}>Saudável</Text>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={[styles.miniCard, { flex: 1 }]}>
          <Text style={styles.title}>Receitas Criadas</Text>
          <Text style={styles.text}>5</Text>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={[styles.miniCard, { flex: 1 }]}>
          <Text style={styles.title}>Consumido</Text>
          <View style={{flexDirection:"row"}}>
            <Text style={styles.vitaminD}>D</Text>
            <Text style={styles.vitaminA}>A</Text>
            <Text style={styles.vitaminB2}>B2</Text>
            <Text style={styles.vitaminB12}>B12</Text>
          </View>
        </View>
      </View>
            <View style={styles.rowContainer}>
        <View style={[styles.miniCard, { flex: 1 }]}>
          <Text style={styles.title}>Ignorado</Text>
          <View style={{flexDirection:"row"}}>
            <Text style={styles.vitaminD}>D</Text>
            <Text style={styles.vitaminA}>A</Text>
            <Text style={styles.vitaminB2}>B2</Text>
            <Text style={styles.vitaminB12}>B12</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#121214'
  },
  card: {
    backgroundColor: '#26262a',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  miniCard: {
    textAlign:"center",
    alignItems: "center",
    justifyContent:"center",
    backgroundColor: '#26262a',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    color: "#ffffffd1",
    marginVertical: 6,
    fontSize: 25
  },
  text: {
    color: "#ffffff80",
    fontSize: 15
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
});
