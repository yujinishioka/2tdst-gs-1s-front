import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Alert, Image, StyleSheet, TouchableOpacity  } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RegisterScreen = () => {
  const [showForm, setShowForm] = useState(false);
  const [logged, setLogged] = useState(false);
  const [users, setUsers] = useState([]);

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
      const obj = { loginRegister, passwordRegister };
      try {
        const newUsers = [...users, obj];
        await AsyncStorage.setItem('users', JSON.stringify(newUsers));
        setUsers(newUsers);
        alert(`New user: ${JSON.stringify(obj)}`);
      } catch (error) {
        console.error(error);
        alert('Erro ao cadastrar usuário');
      }
    };

    return (
      <View style={styles.form}>
          <Image style={styles.logo} source={require('../../../assets/logo.png')}/>
          <View style={styles.width}>
          <Text style={styles.title}>Register</Text>
          </View>
          <TextInput placeholder={"Name"} style={styles.input} />
          <TextInput placeholder={"Email"} style={styles.input} value={loginRegister} onChangeText={setLoginRegister} />
          <TextInput placeholder={"Password"} style={styles.input} value={passwordRegister} onChangeText={setPasswordRegister} secureTextEntry={true} />
          <TouchableOpacity  style={styles.buttonPrimary} onPress={handleRegister} >
            <Text>Register</Text>
          </TouchableOpacity>

          <View style={styles.links}>
            <TouchableOpacity onPress={()=>setShowForm(false)}>
              <Text style={styles.link}>Go to Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={clearStorage}>
              <Text style={styles.link}>Clean registers</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={showUsers}>
            <Text style={styles.link}>Show users</Text>
          </TouchableOpacity>
      </View>
    );
  };

  const FormLogin = () => {
    const [login, setLogin] = useState('');
    const [passwordLogin, setPasswordLogin] = useState('');
    const handleLogin = () => {
      const user = users.find((u) => u.loginRegister === login && u.passwordRegister === passwordLogin);
      if (user) { alert('Login realizado com sucesso!'); } 
      else { alert('Usuário ou senha incorretos'); }
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
        <Image style={styles.logo} source={require('../../../assets/logo.png')}/>
        <View style={styles.width}>
          <Text style={styles.title}>Login</Text>
        </View>
        <TextInput placeholder={"Email"} style={styles.input} value={login} onChangeText={setLogin} />
        <TextInput placeholder={"Password"} style={styles.input} value={passwordLogin} onChangeText={setPasswordLogin} secureTextEntry={true}/>
        <TouchableOpacity  style={styles.buttonPrimary} onPress={handleLogin} >
          <Text>Login</Text>
        </TouchableOpacity>
        <View style={styles.links}>
          <TouchableOpacity onPress={()=>setShowForm(true)}>
            <Text style={styles.link}>Go to Register</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={clearStorage}>
            <Text style={styles.link}>Clean registers</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={showUsers}>
            <Text style={styles.link}>Show users</Text>
          </TouchableOpacity>
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
    borderRadius:25
  },
  logo: {
    width: 120,
    height: 120
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
    width:110,
    height:45,
    textAlign:'center',
    justifyContent:'center',
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
  txtButton: {
    color:'#5170fd',
  },
  width:{
    width:'100%'
  },
  links:{
    marginTop:20
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