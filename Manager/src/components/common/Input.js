
import React, {Component} from 'react';
import {TextInput, Text, View,StyleSheet} from 'react-native';

const Input = ({label,value,onChangeText,placeholder,password}) => {
    const {container,lablelStyle,InputStyle} = styles
 return (
     <View style={container}>
         <Text style={lablelStyle} >{label}</Text>
         <TextInput
            placeholder={placeholder}
            autoCorrect={false}
            autoCapitalize={"none"}
            style={InputStyle}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={password}
            />
     </View>
 )
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: 40,
      flexDirection:'row',
      alignItems:'center'

    },
   
    lablelStyle: {
      fontSize: 18,
      paddingLeft:20,
      flex:1
    },
    InputStyle: {
        paddingRight: 5,
        color: '#000',
        borderColor: 'gray', 
        paddingLeft: 5,
        fontSize:18,
        lineHeight:23,
        flex:2
      }
    
  });


export {Input};