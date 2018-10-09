import React,{ Component } from 'react';

import {Picker,Text,StyleSheet,View} from 'react-native';

import{ Card, CardSection, Input,Button} from './common'
import {employeeUpdate} from '../actions';

import {connect} from 'react-redux';
import EmployeeEdit from "./EmployeeEdit";

class EmployeeForm extends Component{
    render(){
        return(
            <View style ={styles.container}>
            <CardSection>
                     <Input
                      label="Name"
                      placeholder="Mukesh"
                      value ={this.props.name}
                      onChangeText={ value =>{
                         this.props.employeeUpdate({prop:'name',value})
                     }}
                     />    
                 </CardSection>
                 
                 <CardSection>
                 <Input
                     label="Phone"
                     placeholder="555-555-555"
                     value ={this.props.phone}
                     onChangeText={ value =>{
                       this.props.employeeUpdate({prop:'phone',value})
                   }}
                   />
                 </CardSection>
   
   
                 <CardSection style ={{flexDirection:'column'}}>
                  <Text style ={styles.pickerLabel}> Shift </Text>
                   <Picker
                       selectedValue={this.props.shift}
                       onValueChange={value => this.props.employeeUpdate({prop:'shift',value})}>
                           <Picker.Item label="Monday" value="Monday" />
                           <Picker.Item label="Tuesday" value="Tuesday" />
                           <Picker.Item label="Wednesday" value="Wednesday" />
                           <Picker.Item label="Thursday" value="Thursday" />
                           <Picker.Item label="Friday" value="Friday" />
                           <Picker.Item label="Saturday" value="Saturday" />
                           <Picker.Item label="Sunday" value="Sunday" />   
                       </Picker>
                 </CardSection>
                 
         </View>
    )};
}

const styles= StyleSheet.create({
    pickerLabel:{
        paddingLeft:18,
        fontSize:20,
    },
    pickerLabel:{
        paddingLeft:18,
        fontSize:20,
    },
    container: {
       // flex: 1
        
      }
});





const mapToSateProps = state =>{

    const {name,phone,shift}  = state.employeeForm;
    return {name,phone,shift} ;
}


export default connect(mapToSateProps,{employeeUpdate})( EmployeeForm);