// screens/DetailScreen.js

import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

const LoginScreen = ({navigation}) => {

  //these are variables, username is the variable name
  //setUsername is the function that will update the username
  //The setUsername function isn't defined anywhere.
  //it only updates the 'username' variable. React native magic lol
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Check username and password before allowing user to login
    if (username != '' && password != '') {
      navigation.navigate('Home');
    } else {
      alert('Invalid username or password');
    }
  };


  return (
    //View is like div, styles.container is the css it is using
    <View style={styles.container}>

      <View style={styles.formContainer}>
        {/* This is how you do one line comments inside a View element */}
        <Text>This is a login screen!</Text>
        <Text>This should let you in as long as the fields are not empty</Text>
     
      <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <Button title="Login" onPress={handleLogin} />
       
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  formContainer: {
    marginVertical: 20,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
  }, 
});

export default LoginScreen;