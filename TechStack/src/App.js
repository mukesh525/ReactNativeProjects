
import React, {Component} from 'react';
import {View,StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from'./reducer';
import{Header} from'./components/common';
import LibraryList from './components/LibraryList'



const App = () => {
    const {container,lablelStyle,InputStyle} = styles

 return (
     <Provider store={createStore(reducers)}>
      <View style={container}>
      <Header headerText="Tech Stack"/>
      <LibraryList/>
    
     </View>
     </Provider>
 )
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:'center',
      flexDirection:'column',
      alignItems:'center'
    }
    
  });


export default App;