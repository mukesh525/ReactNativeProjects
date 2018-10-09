import React from 'react';
import {View, Text } from 'react-native';

const CardSection =(props) => {

    return (
     <View style={styles.containerStyle}>
           {props.children}
    </View>
    );
   };


   const styles ={
       containerStyle:{
           padding:5,
           borderWidth:1,
           boderBottomWidth:2,
           marginBottom: 10,
           backgroundColor:'#fff',
           justifyContent:'flex-start',
           flexDirection:'row',
           borderColor:'#ddd',
           position:'relative'
       }
   }

   export  {CardSection};
