import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native';
import {Card,CardSection,Button,Input,Spinner} from './common';
import firebase from 'firebase';
type Props = {};
export default class LoginForm extends Component<Props> {

 state= { email:'',pass:'',error:'',loading:false} ;
 
onButtonPressed = ()=> {
  const { email, pass}  = this.state;
  this.setState({error:'',loading:true});
  firebase.auth().signInAndRetrieveDataWithEmailAndPassword(email,pass)
  .then(this.onLoginSucess())
  .catch(()=>{
    firebase.auth().createUserWithEmailAndPassword(email,pass)
    .then(this.onLoginSucess())
    .catch(this.onLoginFail());
  });
}


onLoginSucess =() =>{
    this.setState({
        email:'',
        pass:'',
        error:'',
        loading:false
    });
}

onLoginFail =() =>{
    this.setState({
        email:'',
        pass:'',
        error:'Authentication Failed.',
        loading:false
    });
}



renderButton(){
    if(this.state.loading){
        return <Spinner size="small"/>;
    }
    return(
        <Button onPress={this.onButtonPressed}  text={'Login'}/>
    );

    
}





render() {
 return (
      <Card>
          <CardSection>
           <Input
             placeholder="user@gmail.com"
             label="Email"
             value={this.state.email}
             onChangeText={email => this.setState({email})}
             />
          </CardSection>
         
          <CardSection>
          <Input
             password={true}  
             placeholder="password"
             label="Password"
             value={this.state.pass}
             onChangeText={pass => this.setState({pass})}
             />
          </CardSection>
          <CardSection>
           <Text style={styles.errortextStyle}>{this.state.error}</Text>
          </CardSection>
          <CardSection>
            {this.renderButton()}
         </CardSection>
      </Card>
    );
  }
}

const styles= StyleSheet.create({
    errortextStyle:{
        alignSelf:'center',
        color:'red',
        fontSize:20,
        

    }
});