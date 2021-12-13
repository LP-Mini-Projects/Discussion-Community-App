import React, { useState } from 'react';
import { Text, StyleSheet, View, ImageBackground, TouchableOpacity } from 'react-native';
import Input from '../components/input';
import { buttonColor,buttonTextColor } from '../config/colors';

export default function Landing({ navigation }) {
  const [username, setUsername] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/blank_app.png')}
        style={styles.backgroundImage}>
        <View style={styles.form}>
          <Text style={styles.message}>What should we call you?</Text>
          <View style={{ alignItems: 'center' }}>
            <Input
              placeholder='Pick a Username'
              name='username'
              id='username'
              value={username}
              onChangeText={(text) => { setUsername(text) }}
              placeholderTextColor='#393E46'
            />
            <View style={{marginVertical:8}}/>
            <Input
              placeholder='First Name'
              name='fname'
              id='fname'
              value={fname}
              onChangeText={(text) => { setFname(text) }}
              placeholderTextColor='#393E46'
            />

            <Input
              placeholder='Last Name'
              name='lname'
              id='lname'
              value={lname}
              onChangeText={(text) => { setLname(text) }}
              placeholderTextColor='#393E46'
            />

            <View>
                <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('Confirmation')}}>
                <Text style={{color:buttonTextColor}}>Continue</Text>
                </TouchableOpacity>
            </View>

            </View>
        </View>
      </ImageBackground>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  form: {
    flex: 1,
    // padding: 10,
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems:'center'
  },
  message: {
    color: 'white',
    fontSize: 24,
    marginBottom: 37,
    alignSelf: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'center'
  },
  button: {
    marginTop:44,
    alignItems: "center",
    backgroundColor: buttonColor,
    paddingVertical:12,
    borderRadius:8,
    width:326,
  },
});