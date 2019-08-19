import {TERM_CHANGE, LOC_CHANGE } from '../actions/actionTypes';

const initialState = {
    term: '',
    loc: 'jp'
}

function searchState(state=initialState, action) {
    switch (action.type) {
        case TERM_CHANGE:
            return Object.assign({}, state, {
                term: action.term
            })
        
        case LOC_CHANGE: 
            return Object.assign({}, state, {
                loc: action.loc
            })

        default:
            return state;
    }
}

export default searchState;