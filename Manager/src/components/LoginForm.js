import React, {Component} from 'react';
import {StyleSheet,Text,View} from 'react-native';
import {connect} from 'react-redux'
import {Card,CardSection,Button,Input,Spinner} from './common';
import firebase from 'firebase';
import {emailChanged,passChanged,loginUser} from '../actions'
type Props = {};

class LoginForm extends Component<Props> {

onEmailChange=(email)=>{
    this.props.emailChanged(email);
    
}

onPassChange=(pass)=>{
    this.props.passChanged(pass);
    
}
onButtonPressed=()=>{
    const {email,pass} = this.props;
    this.props.loginUser({email,pass});
    
}



renderError(){
 if(this.props.error){
    return(
        <View  style ={{background:'white'}}>
              <Text style={styles.errortextStyle}>{this.props.error}</Text>
        </View>
    );
    }
    
}

renderButton(){

    if(this.props.loading){
        return <Spinner size="small"/>
    }
   return(
        <Button onPress={this.onButtonPressed}  text={"Login"}/>
    );

    
}


render() {
 return (
      <Card>
          <CardSection>
           <Input
             placeholder="user@gmail.com"
             label="Email"
             value={this.props.email}
             onChangeText={this.onEmailChange}
             />
          </CardSection>
          <CardSection>
          <Input
             password={true}  
             placeholder="password"
             label="Password"
             value={this.props.pass}
             onChangeText={this.onPassChange}
             />
          </CardSection>
            {this.renderError()}
          <CardSection>
            {this.renderButton()}
         </CardSection>
      </Card>
    );
  }
}


const mapStateToProps = state =>{
    return {
       email:state.auth.email,
       pass:state.auth.pass,
       error:state.auth.error,
       loading:state.auth.loading
    };
};


export default connect(mapStateToProps,{emailChanged,passChanged,loginUser})(LoginForm);
const styles= StyleSheet.create({
    errortextStyle:{
        alignSelf:'center',
        color:'red',
        fontSize:20,
        

    }
});