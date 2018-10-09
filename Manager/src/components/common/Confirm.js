import React,{ Component } from 'react';
import {Text,StyleSheet,View,Modal} from 'react-native';
import  {CardSection,Button} from '../common';
//import  Button from './Button';


const Confirm = ({children,visible,onAccept,onDecline}) =>{
    const {cardSectionstyle,textStyle,containerStyle,ButtonStyle} = styles
    //debugger
   return(
       <Modal
           visible={visible}
           transparent
           animationType="fade"
           onRequestClose={()=>{

           }} >
           <View style={containerStyle}>
            <CardSection style={cardSectionstyle}>
              <Text style={textStyle}> {children}</Text>
            </CardSection>

            <CardSection style={cardSectionstyle} >
             <Button style={ButtonStyle} onPress = {onAccept} text={'Yes'}/> 
             <Button  style={ButtonStyle}  onPress = {onDecline} text={'No'}/> 
           </CardSection>  
           </View>
       </Modal>
   );
}

const styles= StyleSheet.create({
    cardSectionstyle:{
        justifyContent:'center',
        borderBottomWidth:0,
        marginBottom: 0     
    },
    ButtonStyle:{
        width:'45%',
       
    },
    textStyle:{
        flex:1,
        fontSize:18,
        textAlign:"center",
        lineHeight:40
    },
    containerStyle: {
       backgroundColor:'rgba(0,0,0,0.75)',
       position:'relative',
       flex:1,
       padding:10,
       justifyContent:'center'
  
      
      }
});



export {Confirm};