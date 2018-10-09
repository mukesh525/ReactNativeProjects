/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Header,Button,Spinner} from './common';
import firebase from 'firebase';
import LoginForm from './LoginForm'
type Props = {};
interface IState {
  loggedIn: any;
}


export default class App extends Component<Props,IState> {

 state= { loggedIn:null} ;
 

componentWillMount(){
  var config = {
    apiKey: "AIzaSyBRUQrMXxBznBrco4AkqL_i8sgqZ0P1vQo",
    authDomain: "foodpanda-cbfea.firebaseapp.com",
    databaseURL: "https://foodpanda-cbfea.firebaseio.com",
    projectId: "foodpanda-cbfea",
    storageBucket: "foodpanda-cbfea.appspot.com",
    messagingSenderId: "627218134634"
  };
  firebase.initializeApp(config);
  firebase.auth().onAuthStateChanged((user)  =>{
    
      if(user){
        this.setState({loggedIn:true});
      }
      else{
        this.setState({loggedIn:false});
      }

      });


}


renderContent =()=>{
  switch (this.state.loggedIn){
    case true:
     return (
      <Button onPress={()=> firebase.auth().signOut()}  text={'Log Out'}/>
     );
    case false:
      return <LoginForm />;
   
      default:
    return (<Spinner size ="large" />);
    
  }
  
}

  render() {
    return (
      <View style={styles.container}>
        <Header headerText="Authentication"/>
       {this.renderContent()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
 
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  
});
