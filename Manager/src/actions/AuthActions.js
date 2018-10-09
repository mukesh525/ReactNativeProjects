import {
    EMAIL_CHANGED,
    PASS_CHANGED,
    LOGIN_USER_SUCESS,
    LOGIN_USER_ERROR,
    LOGIN_USER_START
} from './types';
import firebase from "firebase";
import {Actions} from 'react-native-router-flux';

export const emailChanged =(email) => {
     return {
        type:EMAIL_CHANGED,
        playload:email
    };
};

export const passChanged =(pass) => {
     return {
         type:PASS_CHANGED,
         playload:pass
     };
 };


 
 export const loginUser =({email,pass}) => {
     return (dispatch) =>{
       dispatch({type:LOGIN_USER_START});  
       firebase.auth().signInAndRetrieveDataWithEmailAndPassword(email,pass)
      .then(user => loginUserSucess(dispatch,user))
      .catch(()=>{
          firebase.auth().createUserWithEmailAndPassword(email,pass)
          .then(user => loginUserSucess(dispatch,user))
          .catch(()=> loginUserFail(dispatch))
          
      });
     };
 };

 const loginUserSucess =(dispatch,user) =>{
     dispatch ({
         type:LOGIN_USER_SUCESS,
         playload:user
     });
     Actions.main({type:'reset'});
 };
 const loginUserFail =(dispatch) =>{
    dispatch ({
        type:LOGIN_USER_ERROR
    });

  };
   
