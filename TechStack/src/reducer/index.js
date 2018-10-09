import {combineReducers} from 'redux';
import library from'./library';
import SelectionReducer from'./SelectionReducer';
export default combineReducers({
    libraries: library,
    selectionLibraryId:SelectionReducer
});