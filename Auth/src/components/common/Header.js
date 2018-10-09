/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});



interface Props {
  headerText: string;
}

 class Header extends Component<Props> {
  
  render() {
    const {container,welcome} = styles;
    return (
       <View style={container}>
        <Text style={welcome}>{this.props.headerText}</Text>
       </View>
    );
  }

}

export {Header};



const styles = StyleSheet.create({
  container: {
    width:'100%',
    backgroundColor: '#F8F8F8',
    justifyContent:'center',
    alignItems:'center',
    height:60,
    paddingTop:15,
    shadowColor:"#000",
    shadowOffset:{width:0,height:2},
    shadowOpacity:0.1,
    elevation:2,
    position:'relative'
  },
  welcome: {
    fontSize: 20,
    margin: 10,
  }
});
