import { TERM_CHANGE, LOC_CHANGE, RESET, REQUEST } from './types';
import dbCall from '../../util/dbCall';

export function termChange(term) {
    return {
        type: TERM_CHANGE,
        term
    };
}

export function locChange(loc) {
    return {
        type: LOC_CHANGE,
        loc
    };
}

export function resetState() {
    return {
        type: RESET
    };
}

export function requestProducts(products) {
    return {
        type: REQUEST,
        products
    }
}

export function reduxDbCall(term, loc) {
    return function(dispatch) {
        return dbCall(term, loc).then(
            (products) => dispatch(requestProducts(products))
        );
    };
}