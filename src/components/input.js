import React,{useState} from "react";
import { View,Text,TextInput, StyleSheet } from "react-native";

const Input=(props)=>{

    return(
        <View style={styles.input}>
            <TextInput style={styles.textInput}
                placeholder={props.placeholder}
                name={props.name}
                id={props.id}
                value={props.value}
                onChangeText={props.onChangeText}
            />
        </View>
    )
}

const styles=StyleSheet.create({
    textInput:{
        width:296,
        // height:20,
        top:5.5,
        backgroundColor:'#FFFFFF',
        fontSize:14,
        paddingTop:8.7,
        marginBottom:14,
    },
    input:{
        height:60,
        width:326,
        backgroundColor:'#FFFFFF',
        paddingRight:16,
        paddingLeft:14,
        borderRadius:4,
        alignItems:'center',
        flexDirection:'row',
        marginBottom:16,
        paddingbottom:14,
    },
})

export default Input;