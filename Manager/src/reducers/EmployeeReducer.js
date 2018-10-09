import {
    EMPLOYEE_FETCH
} from '../actions/types';

import {connect} from 'react-redux';
const INITIAL_STATE ={};

export default(state = INITIAL_STATE,action) =>{
   // console.log(action);
     switch(action.type){
        case EMPLOYEE_FETCH:
          console.log(action.playload);
           return action.playload;     
        default:
          return state;
    }
}