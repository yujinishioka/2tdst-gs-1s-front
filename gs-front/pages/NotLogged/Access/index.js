import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Alert, Image, StyleSheet, TouchableOpacity  } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

import api from '../../../api'
import Logged from '../../Logged/index'

const RegisterScreen = ({onLogin}) => {
  const [showForm, setShowForm] = useState(false);
  const [users, setUsers] = useState([]);
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const usersString = await AsyncStorage.getItem('users');
        if (usersString !== null) {
          setUsers(JSON.parse(usersString));
        }
      } catch (error) {
        console.error(error);
      }
    };
    getUsers();
  }, []);

  const clearStorage = async () => {
    try {
      await AsyncStorage.clear();
      Alert.alert('AsyncStorage has been cleared!');
      // .then((info)=>{alert("Chaves Limpas")})
    } catch (error) {
      console.log(error);
      Alert.alert('Error clearing AsyncStorage.');
    }
  };

  const FormRegister = () => {
    const [nameRegister, setNameRegister] = useState('');
    const [loginRegister, setLoginRegister] = useState('');
    const [passwordRegister, setPasswordRegister] = useState('');

    const showUsers = async () => {
    await AsyncStorage.getItem('users')
    .then((info)=>{
      let lst = []
      if(info){
        lst = JSON.parse(info)
      }
      alert("Users: " + JSON.stringify(lst))
    })
    .catch((err)=>{alert("Erro ao ler a lista de usuários: " + err)})
    };

    const handleRegister = async () => {
      api.post('/user/register', {
        "name": nameRegister,
        "email": loginRegister,
        "password": passwordRegister
      }).then(() => {
        alert("Usuário cadastrado com sucesso.");
      }).catch((err) => {
        alert(`Erro ao cadastrar usuário. ${err}`);
      })
    };

    return (
      <View style={styles.form}>
          <Image style={styles.logo} source={require('../../../assets/logo-circle.png')}/>
          <View style={styles.width}>
          <Text style={styles.title}>Register</Text>
          </View>
          <TextInput placeholder={"Nome"} placeholderTextColor={'#ffffff80'} style={styles.input} value={nameRegister} onChangeText={setNameRegister} />
          <TextInput placeholder={"Email"} placeholderTextColor={'#ffffff80'} style={styles.input} value={loginRegister} onChangeText={setLoginRegister} />
          <TextInput placeholder={"Senha"} placeholderTextColor={'#ffffff80'} style={styles.input} value={passwordRegister} onChangeText={setPasswordRegister} secureTextEntry={true} />
          <TouchableOpacity  style={styles.buttonPrimary} onPress={handleRegister} >
            <Text style={styles.txtButton}>Registrar</Text>
          </TouchableOpacity>

          <View style={styles.links}>
            <Text style={styles.txt}>Já possui cadastro?</Text>
            <TouchableOpacity onPress={()=>setShowForm(false)}>
              <Text style={styles.link}>Faça o Login</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={clearStorage}>
              <Text style={styles.link}>Clean registers</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={showUsers}>
              <Text style={styles.link}>Show users</Text>
            </TouchableOpacity> */}
          </View>
      </View>
    );
  };

  const FormLogin = () => {
    const [login, setLogin] = useState('neurotrix1@fiap.com');
    const [passwordLogin, setPasswordLogin] = useState('teste123');

    const handleLogin = () => {
      api.post('/login', {
        "login": login,
        "password": passwordLogin
      }).then((resp) => {
        AsyncStorage.setItem('userToken', resp.data);
        onLogin();
      }).catch((err) => {
        alert(`Usuario ou senha invalido.`);
      });
    };

    const showUsers = async () => {
      await AsyncStorage.getItem('users')
      .then((info)=>{
        let lst = [];
        if(info){
          lst = JSON.parse(info);
        }
        alert("Users: " + JSON.stringify(lst));
      }).catch((err)=>{alert("Erro ao ler a lista de usuários: " + err)});
    };

    return (
      <View style={styles.form}>
        <Image style={styles.logo} source={require('../../../assets/logo-circle.png')}/>
        <View style={styles.width}>
          <Text style={styles.title}>Login</Text>
        </View>
        <TextInput placeholder={"Email"} placeholderTextColor={'#ffffff80'} style={styles.input} value={login} onChangeText={setLogin} />
        <TextInput placeholder={"Senha"} placeholderTextColor={'#ffffff80'} style={styles.input} value={passwordLogin} onChangeText={setPasswordLogin} secureTextEntry={true}/>
        <TouchableOpacity  style={styles.buttonPrimary} onPress={handleLogin} >
          <Text style={styles.txtButton}>Log in</Text>
        </TouchableOpacity>
        <View style={styles.links}>
          <Text style={styles.txt}>Não possui cadastro?</Text>
          <TouchableOpacity onPress={()=>setShowForm(true)}>
            <Text style={styles.link}>Registre-se!</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={clearStorage}>
            <Text style={styles.link}>Clean registers</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={showUsers}>
            <Text style={styles.link}>Show users</Text>
          </TouchableOpacity> */}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.content}>
      { showForm ? ( <FormRegister/> ):( <FormLogin/> )}
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#121214',
    padding: 20,
  },
  form: {
    display:'flex',
    alignItems:'center',
    backgroundColor:'#26262a',
    padding:20,
    paddingTop: 40,
    borderRadius:25,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 30
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor:"#121214",
    color:'#ffffff80',
    borderRadius:8,
    margin:12,
    paddingLeft: 15
  },
  title: {
    flex:1,
    justifyContent:'flex-start',
    fontSize:30,
    fontWeight:'500',
    color:'#ffffffd1',
  },
  aboutTitle: {
    fontSize:17,
    fontWeight:'300',
    color:'#ffffffd1',
  },
  buttonGroup: {
    display: 'flex',
    width:'100%',
    justifyContent:'space-between',
    marginTop:30,
    flexDirection: 'row',
  },
  buttonPrimary: {
    width:180,
    height:45,
    textAlign:'center',
    justifyContent:'center',
    marginTop: 20,
    borderRadius: 15,
    backgroundColor:'#fe8f00'
  },
  buttonSecundary: {
    width:110,
    height:45,
    textAlign:'center',
    justifyContent:'center',
    color:'#26262a',
    borderRadius: 15,
    backgroundColor:'#26262a',
    borderWidth: 3,
    borderColor:'#fe8f00',
  },
  txt: {
    color: 'white'
  },
  txtButton: {
    color:'white',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  width:{
    width:'100%'
  },
  links:{
    marginTop:20,
    marginBottom: 30,
  },
  link:{
    textDecorationLine:'underline',
    textDecorationColor:'#fe8f00',
    fontSize:15,
    textAlign:'center',
    color:'#fff',
  }
});

export default RegisterScreen;