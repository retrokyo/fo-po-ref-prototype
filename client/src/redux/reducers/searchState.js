import {TERM_CHANGE, LOC_CHANGE, RESET } from '../actions/types';
import { initialSearchState } from '../util/initialState';

function searchState(state=initialSearchState, action) {
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
            return Object.assign({}, state, initialSearchState);
            
        default:
            return state;
    }
}

export default searchState;