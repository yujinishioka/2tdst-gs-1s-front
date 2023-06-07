import * as React from 'react';
import { Text, View, ScrollView, StyleSheet, Image } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <View style={{alignItems:"center"}}>
          <Image style={{width: 120, height: 138}} source={require('../../../assets/logo.png')}/>
        </View>
        <Text style={[styles.title, {textAlign:"center"}]}>
          Gerencia sua Cozinha
        </Text>
        <Text style={styles.text}>
           Chef é um aplicativo desenvolvido para ajudar você a otimizar sua experiência culinária e lidar com a escassez e desperdício de alimentos. Com o nosso aplicativo, você terá o controle total dos alimentos em sua despensa, permitindo uma gestão eficiente do que você tem e do que precisa comprar além de auxiliar em receitas.
        </Text>
      </View>
      <View style={styles.rowContainer}>
        <View style={[styles.miniCard, { flex: 1}]}>
          <Text style={styles.title}>Fundadores</Text>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={[styles.miniCard, { flex: 1, flexDirection:"row", justifyContent:"flex-start" }]}>
          <Image style={{width: 50, height: 50, borderRadius:5}} source={require('../../../assets/gabriel.png')}/>
          <Text style={styles.subTitle}>Gabirel da Silva</Text>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={[styles.miniCard, { flex: 1, flexDirection:"row", justifyContent:"flex-start" }]}>
          <Image style={{width: 50, height: 50, borderRadius:5}} source={require('../../../assets/felipe.png')}/>
          <Text style={styles.subTitle}>Felipe Sugisawa</Text>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={[styles.miniCard, { flex: 1, flexDirection:"row", justifyContent:"flex-start" }]}>
          <Image style={{width: 50, height: 50, borderRadius:5}} source={require('../../../assets/yuijin.png')}/>
          <Text style={styles.subTitle}>Vinicius Yuijin</Text>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={[styles.miniCard, { flex: 1, flexDirection:"row", justifyContent:"flex-start" }]}>
          <Image style={{width: 50, height: 50, borderRadius:5}} source={require('../../../assets/leandro.png')}/>
          <Text style={styles.subTitle}>Leandro Alves</Text>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={[styles.miniCard, { flex: 1, flexDirection:"row", justifyContent:"flex-start" }]}>
          <Image style={{width: 50, height: 50, borderRadius:5}} source={require('../../../assets/vinicius.png')}/>
          <Text style={styles.subTitle}>Vinicius Torres</Text>
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
  subTitle: {
    color: "#ffffffd1",
    marginLeft: 10,
    fontSize: 18
  },
  text: {
    color: "#ffffff80",
    fontSize: 15
  },
});
