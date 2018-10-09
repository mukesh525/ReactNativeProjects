import React,{Component} from 'react';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import {View,Text,StyleSheet} from 'react-native';
import reducers from "./reducers";
import firebase from 'firebase';
import {Header,Card,CardSection,Button} from './components/common';
import LoginForm from './components/LoginForm'
import ReduxThunk from 'redux-thunk';
import Router from './Router'


class App extends Component {
    componentWillMount(){
    const config = {
            apiKey: "AIzaSyBRUQrMXxBznBrco4AkqL_i8sgqZ0P1vQo",
            authDomain: "foodpanda-cbfea.firebaseapp.com",
            databaseURL: "https://foodpanda-cbfea.firebaseio.com",
            projectId: "foodpanda-cbfea",
            storageBucket: "foodpanda-cbfea.appspot.com",
            messagingSenderId: "627218134634"
          };
        firebase.initializeApp(config);    
    }

    render(){
        const store =createStore(reducers,{},applyMiddleware(ReduxThunk));
        return(
            <Provider store ={store}>
              <Router/>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFF',
    }
  });
  

export default App;
