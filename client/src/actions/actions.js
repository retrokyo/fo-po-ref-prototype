import { TERM_CHANGE, LOC_CHANGE } from './actionTypes';

export function termChange(term) {
    return {
        type: TERM_CHANGE,
        term
    }
}

export function locChange(loc) {
    return {
        type: LOC_CHANGE,
        loc
    }
}