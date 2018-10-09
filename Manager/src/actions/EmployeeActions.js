
import {
    EMPLOYEE_CREATE,
    EMPLOYEE_UPDATE,
    EMPLOYEE_FETCH,
    EMPLOYEE_SAVE_SUCESS
} from './types';

import firebase from "firebase";
import {Actions} from "react-native-router-flux";

export const employeeUpdate =({prop,value}) =>{
    return{
        type:EMPLOYEE_UPDATE,
        playload:{prop,value}
    };

};

export const employeeFetch =() =>{
    const {currentUser} =firebase.auth();
    return (dispatch) =>{
        firebase.database().ref(`/users/${currentUser.uid}/employee`)
        .on('value',snapshot => {
           dispatch({type:EMPLOYEE_FETCH,playload:snapshot.val()});
       });
      
    };


};

export const employeeCreate =({name,phone,shift}) =>{
    const {currentUser} =firebase.auth();
    return (dispatch) =>{
        firebase.database().ref(`/users/${currentUser.uid}/employee`)
       .push({name,phone,shift})
       .then(()=>  {
             dispatch({type:EMPLOYEE_CREATE});
             Actions.pop()
        }
       );
    };


};

export const employeeSave=({name,phone,shift,uid}) =>{
    const {currentUser} =firebase.auth();
    return (dispatch) =>{
        firebase.database().ref(`/users/${currentUser.uid}/employee/${uid}`)
        .set({name,phone,shift})
        .then(()=>  {
           // console.log("saved");
            dispatch({type:EMPLOYEE_SAVE_SUCESS});
            Actions.pop()
        }
       );
    };


};


export const employeeDelete=({uid}) =>{
    const {currentUser} =firebase.auth();
    return (dispatch) =>{
        firebase.database().ref(`/users/${currentUser.uid}/employee/${uid}`)
        .remove()
        .then(()=>  {
           // console.log("saved");
         //   dispatch({type:EMPLOYEE_SAVE_SUCESS});
            Actions.pop()
        }
       );
    };


};