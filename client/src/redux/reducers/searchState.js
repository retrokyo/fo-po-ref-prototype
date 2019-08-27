import {TERM_CHANGE, LOC_CHANGE, RESET } from '../actions/types';
import { initialState } from '../util/initialState';

function searchState(state=initialState, action) {
    switch (action.type) {
        case TERM_CHANGE:
            return Object.assign({}, state, {
                term: action.term
            });
        
        case LOC_CHANGE: 
            return Object.assign({}, state, {
                loc: action.loc
            });

        case RESET:
            return Object.assign({}, state, initialState);
            
        default:
            return state;
    }
}

export default searchState;