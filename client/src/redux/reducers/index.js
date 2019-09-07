import { combineReducers } from 'redux';
import requestReducer from './requestReducer';
import searchState from './searchState';

export default combineReducers({
    searchState: searchState,
    requestReducer: requestReducer
});