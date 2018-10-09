import React,{ Component } from 'react';


import {Picker,Text,StyleSheet,View} from 'react-native';

import{ Card, CardSection,Button} from './common'
import {connect} from 'react-redux'
import {employeeUpdate,employeeCreate} from '../actions';

import EmployeeForm from "./EmployeeForm";
import EmployeeEdit from "./EmployeeEdit";
class EmployeeCreate extends Component{


onButtonPress=()=>{
    const {name,phone,shift} = this.props;
    this.props.employeeCreate({name,phone,shift});
}

    render(){
        return(
        <View style ={styles.container}>
            <Card>
               <EmployeeForm {...this.props} />
               <CardSection>
                    <Button  onPress ={this.onButtonPress} text={'CREATE'}/>
                 </CardSection>
             </Card>
             
         </View>
        );
    }
}


const styles= StyleSheet.create({
   
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
      }
});




const mapStateToProps=(state)=>{
  
    const {name,phone,shift}=state.employeeForm
 
    return {name,phone,shift};
};





export default connect (mapStateToProps,{employeeUpdate,employeeCreate})(EmployeeCreate);