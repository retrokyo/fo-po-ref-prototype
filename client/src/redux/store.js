import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import  searchState from './reducers/searchState';

export default createStore(searchState, applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());