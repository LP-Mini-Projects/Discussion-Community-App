import React, { useState } from 'react';
import { Text, StyleSheet, View, ImageBackground, TouchableOpacity } from 'react-native';
import { SocialIcon } from 'react-native-elements';
import Input from '../components/input';
import PassInput from '../components/passwordinput';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { buttonColor,buttonTextColor } from '../config/colors';

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/blank_app.png')}
        style={styles.backgroundImage}>
        <View style={styles.form}>
          <Text style={styles.message}>Welcome Back User</Text>
          <View style={{ alignItems: 'center' }}>
            <Input
              placeholder='Username'
              name='email'
              id='email'
              value={email}
              onChangeText={(text) => { setEmail(text) }}
              placeholderTextColor='#393E46'
            />

            <PassInput
              placeholder='Password'
              name='password'
              id='password'
              value={password}
              onChangeText={(text) => { setPassword(text) }}
              placeholderTextColor='#393E46'
            />
          </View>
          <View style={{ marginTop: 12, marginLeft: wp('8%') }}>
            <TouchableOpacity onPress={() => { }}>
              <Text style={{ color: '#ACACAC', textDecorationLine: 'underline' }}>Forgot your password?</Text>
            </TouchableOpacity>
          </View>

          <View style={{marginLeft:5}}>
            <TouchableOpacity style={styles.button}>
              <Text style={{color:buttonTextColor}}>Login</Text>
            </TouchableOpacity>
          </View>

          <View style={{ marginTop: 40, flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flex: 1, height: 1, backgroundColor: 'white' }} />
            <View style={{ backgroundColor: 'white', width: 60, }}>
              <Text style={{ textAlign: 'center', color: "black" }}>OR</Text>
            </View>
            <View style={{ flex: 1, height: 1, backgroundColor: 'white' }} />

          </View>

          <View style={{ width: 326, alignSelf: 'center', marginTop: 30 }}>
            <SocialIcon
              title="Google"
              button
              type="google"
              style={styles.socialIcon}
              onPress={() => { }}
            />
          </View>
          <TouchableOpacity onPress={()=>{navigation.navigate('SignUp')}}>
              <Text style={{color: '#ACACAC', textDecorationLine: 'underline',alignSelf:'center' }}>Don't have an account? Sign Up</Text>
            </TouchableOpacity>
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
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',
    // alignItems:'center'
  },
  message: {
    color: 'white',
    fontSize: 24,
    marginBottom: 21,
    alignSelf: 'center'
  },
  socialIcon: {
    borderRadius: 8,
    height: 52,
    backgroundColor: 'black',
    borderWidth: 1,
    borderColor: 'white',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'center'
  },
  button: {
    marginTop:36,
    height:46,
    alignItems: "center",
    backgroundColor: buttonColor,
    paddingVertical:12,
    borderRadius:8,
    width:326,
  },
});