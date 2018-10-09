/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, FlatList, View,Text} from 'react-native';
import {connect} from 'react-redux';
import ListItem from './ListItem'

//type Props = {};
interface Props {
  libraries:any[];
}

interface State {
  albums: any[]
}
class LibraryList extends Component<Props> {
  render() {
    
    return (
     <FlatList
       style={styles.container}
       data ={this.props.libraries}
       renderItem ={this.renderItem}
       keyExtractor={library=>library.id}
      />
    );
  }



renderItem =(library) =>{
 // console.log(library);
    return( <ListItem library= {library.item}/>);
 }
}

const mapStateToProps = (state) =>{
   return { libraries:state.libraries};
}


export default connect(mapStateToProps)(LibraryList);



const styles = StyleSheet.create({
  container: {
   flex:1,
   width:'98%'
  }
});
