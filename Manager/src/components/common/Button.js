import React from 'react';
import {Text,TouchableOpacity} from 'react-native';
const Button =(props) => {
const {
     buttonStyle
    } =styles;  
     
 return (
     <TouchableOpacity onPress={props.onPress} style={[buttonStyle,props.style]}>
           <Text style ={styles.textStyle}>{props.text}</Text>
     </TouchableOpacity>
    );
   };



const styles = {
     buttonStyle:{
     height:40,
     width:'98%',
     alignself:'stretch',
     backgroudColor:'#FFF',
     borderRadius:5,
     borderWidth:1,
     borderColor:'#007aff',
     marginLeft:5,
     marginRight:5

    },
    textStyle:{
        alignSelf:'center',
        color:'#007aff',
        fontSize:16,
        fontWeight:'600',
        paddingTop:10,
        paddingBottom:10

    }
};

    export {Button};