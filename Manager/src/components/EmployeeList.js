import React,{ Component } from 'react';
import {FlatList,Text,StyleSheet,View} from 'react-native';
import {employeeFetch} from '../actions';
import {connect} from 'react-redux';
import _ from "lodash"
import ListItem from './ListItem';

class EmployeeList extends Component{

    componentWillMount(){
        this.props.employeeFetch();
    }


    componentWillReceiveProps(nextProps){
     
    }

    

    renderItem =(employees) =>{
            return <ListItem employees ={employees}/>;
        }



    render(){
        return(
            <View style ={styles.viewContainer}>
      
            <FlatList
                style={styles.container}
                data ={this.props.employees}
                renderItem ={this.renderItem}
                keyExtractor={emp=>emp.uid}
            />
         </View>

        );
    }
}

const mapStateToprops = state =>{

      const employees = _.map(state.employees,(val,uid) => {
          return {...val,uid};
      });

      console.log(employees);
      return {employees};

};

const styles = StyleSheet.create({
    container: {
     flex:1,
     width:'100%'
     
    },
    viewContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
      }
  });


export default connect(mapStateToprops,{employeeFetch})(EmployeeList);