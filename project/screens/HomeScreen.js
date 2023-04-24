// screens/HomeScreen.js

import React from 'react';
import { View, Text, Button, StyleSheet, Image, FileSystem } from 'react-native'; 
//import myImage from 'assets/download.jpg';
//<Image source={myImage} />
//import { FileSystem } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Text>Home Screen</Text>
        <Button
          title="Logout"
          onPress={() => navigation.navigate('Login')}
        />
        <Text>Importing image from the internet:</Text>
        <Image source={{url: 'https://www.google.com.au/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AJPG_Test.jpg&psig=AOvVaw1k3eTq5kGxjyb_VZOzYDQE&ust=1682407471823000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOjjp6_-wf4CFQAAAAAdAAAAABAE'}} />
        <Text>Importing image from local computer:</Text>
        
        <Image 
          source={require('../assets/download.jpg')}  
        />
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

  buttonContainer: {
    marginVertical: 20,
  }, 
});

export default HomeScreen;
