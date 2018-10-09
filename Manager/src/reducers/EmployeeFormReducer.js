import {
    EMPLOYEE_CREATE,
    EMPLOYEE_UPDATE,
    EMPLOYEE_FETCH,
    EMPLOYEE_SAVE_SUCESS
} from '../actions/types';

const INITIAL_STATE ={
    name:'',
    phone:'',
    shift:'Monday'
};

export default(state = INITIAL_STATE,action) =>{
    switch(action.type){
       case EMPLOYEE_UPDATE:
           return {...state,[action.playload.prop]:action.playload.value}; 
        case EMPLOYEE_CREATE:
           return INITIAL_STATE;     
        case EMPLOYEE_SAVE_SUCESS:
           return INITIAL_STATE;     
        default:
         return state;
    }
}


