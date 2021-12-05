import React,{useState} from 'react';
import { Text,StyleSheet,View,ImageBackground,TouchableOpacity } from 'react-native';
import { SocialIcon } from 'react-native-elements';
import { Divider } from 'react-native-elements';
import Input from '../components/input';
import PassInput from '../components/passwordinput';

export default function Login({navigation}) {
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

    return (
        <View style={styles.container}>
          <ImageBackground source={require('../assets/blank_app.png')} resizeMode='cover'>
            <View style={styles.form}>
            <Text style={styles.message}>Welcome Back User</Text>
              <Input
              placeholder='Username'
              name='email'
              id='email'
              value={email}
              onChangeText={(text)=>{setEmail(text)}}
              />

              <PassInput
              placeholder='Password'
              name='password'
              id='password'
              value={password}
              onChangeText={(text)=>{setPassword(text)}}
              />
            
              <View style={{marginTop:6}}>
                <TouchableOpacity onPress={()=>{}}>
                <Text style={{color:'white',textDecorationLine:'underline'}}>Forgot your password?</Text>
                </TouchableOpacity>
              </View>

              <View style={{marginTop:40,marginBottom:30}}>
                <Divider orientation="horizontal" width={1} style={{alignItems:'center'}}>
                    <Text style={{textAlign:'center',backgroundColor:'white',width:96,height:25}}>OR</Text>
                </Divider>
              </View> 

              <View style={{width:326,alignSelf:'center'}}>
                <SocialIcon
                  title="Google"
                  button
                  type="google"
                  style={styles.socialIcon}
                  onPress={()=>{}}
                />
      </View>
            </View>
          </ImageBackground>
      </View>
    )
}
const styles=StyleSheet.create({
    container:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'black',

    },
    form:{
      flex:1,
      // backgroundColor:'pink',
      padding:10,
      borderColor:'black',
      borderWidth:1,
      justifyContent:'center'
      // alignItems:'center'
    },
    message:{
      color:'white',
      fontSize:24,
      marginBottom:21,
      alignSelf:'center'
    },
    socialIcon:{
      borderRadius:8,
      height:52,
      backgroundColor:'black',
      borderWidth:1,
      borderColor:'white',
    }
});