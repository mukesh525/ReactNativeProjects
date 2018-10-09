import React ,{Component} from 'react';
import {StyleSheet,Text,TouchableWithoutFeedback,View} from "react-native";
import {CardSection} from './common';
import {Actions} from "react-native-router-flux";

class ListItem extends Component{
    

    onRowpress=()=>{
        Actions.employeeEdit({employee:this.props.employees.item});
    }
    render(){
        //console.log()
        const {name} =this.props.employees.item;
        return(
            <TouchableWithoutFeedback onPress ={this.onRowpress}>
            <View>
             <CardSection>
                <Text style ={styles.textStyle}>
                   {name} 
                </Text>
             </CardSection>
             </View>
            </TouchableWithoutFeedback>
        );
    }
}



const styles= StyleSheet.create({
    textStyle:{
        margin:2,
        paddingLeft:15,
        fontSize:18,
        flex:1

    }
});




export default ListItem;