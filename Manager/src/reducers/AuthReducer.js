import {
    EMAIL_CHANGED,
    PASS_CHANGED,
    LOGIN_USER_SUCESS,
    LOGIN_USER_START,
    LOGIN_USER_ERROR
} from '../actions/types';
const INITIAL_STATE ={
    email:'test@test.com',
    pass:'123456',
    error:'',
    loading:false,
    user:null
};

export default (state=INITIAL_STATE,action) =>{
   // console.log(action);
    
    switch (action.type) {
        case EMAIL_CHANGED:
            return {...state,email:action.playload,error:''};  
        case PASS_CHANGED:
           return {...state,pass:action.playload,error:''};   
        case LOGIN_USER_SUCESS:
             return {...state,user:action.playload,error:'',loading:false};  
        case LOGIN_USER_ERROR:
             return {...state,user:action.playload,error:'Authentication Failed',loading:false};       
        case LOGIN_USER_START:
           return {...state,error:'',loading:true};          
        default:
          return state;

    }

}