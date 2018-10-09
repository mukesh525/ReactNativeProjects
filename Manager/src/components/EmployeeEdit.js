import React,{ Component } from 'react';
import {Picker,Text,StyleSheet,View} from 'react-native';
import{ Card, CardSection,Button,Confirm} from './common'
import {employeeUpdate,employeeSave,employeeDelete} from '../actions';
import EmployeeForm from "./EmployeeForm";
import {connect} from 'react-redux';
import communications from "react-native-communications";
import _ from "lodash";

class EmployeeEdit extends Component{
    state= { showModal:false} ;

   componentWillMount(){
       _.each(this.props.employee,(value,prop) =>{
         this.props.employeeUpdate({prop,value})
       });
   }

   onButtonPress=()=>{
      const {name,phone,shift} = this.props;
      console.log(name,phone,shift)
      this.props.employeeSave({name,phone,shift,uid:this.props.employee.uid});
   }
   onFirePress=()=>{
      this.setState({showModal:!this.state.showModal});
   }

   onAccept=()=>{
    this.props.employeeDelete({uid:this.props.employee.uid});
    this.setState({showModal:!this.state.showModal});
 }

    onDecline=()=>{
    this.setState({showModal:!this.state.showModal});
   }

    onTextPress=()=>{
    const {name,phone,shift} = this.props;
    communications.text(phone,`Your upcoming shift is on ${shift}`);
 }

    render(){
        return(
         <View style ={styles.container}>
             <EmployeeForm/>
             <CardSection>
             <Button  onPress ={this.onButtonPress} text={'Save Chnages'}/>
             </CardSection>
             <CardSection>
             <Button  onPress ={this.onTextPress} text={'Text Shedule'}/>
             </CardSection>
             <CardSection>
             <Button  onPress ={this.onFirePress} text={'Fire'}/>
             </CardSection>
             <Confirm 
             children=" Are you Sure you want to delete this ?"
             visible ={this.state.showModal}
             onAccept={this.onAccept}
             onDecline={this.onDecline}
             >
                
             </Confirm>
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
        flex: 1,
        flexDirection:'column',
        justifyContent:'flex-start',
        
      
      }
});





const mapToSateProps = state =>{

    const {name,phone,shift}  = state.employeeForm;
    return {name,phone,shift} ;
}


export default connect(mapToSateProps,{employeeUpdate,employeeSave,employeeDelete})( EmployeeEdit);