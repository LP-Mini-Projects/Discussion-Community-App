import React, { useState } from 'react';
import { Text, StyleSheet, View, ImageBackground, TouchableOpacity } from 'react-native';
import Antdesign from 'react-native-vector-icons/AntDesign';
import { confirmColor } from '../config/colors';

export default function Confirmation({ navigation }) {


  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/blank_app.png')}
        style={styles.backgroundImage}>
        <View style={styles.form}>
          <Text style={styles.message}>Hi First Last Name, You are all set</Text>
          <Antdesign name='checkcircleo' size={66.92,63.33} color={confirmColor}/>
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
    fontSize: 20,
    marginBottom: 25,
    alignSelf: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'center'
  },
  button: {
    marginTop:36,
    height:46,
    alignItems: "center",
    backgroundColor: "#FD7014",
    paddingVertical:12,
    borderRadius:8,
    width:326,
  },
});