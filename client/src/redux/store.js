import { createStore } from 'redux';
import  searchState from './reducers/searchState';

export default createStore(searchState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());