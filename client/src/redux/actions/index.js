import { TERM_CHANGE, LOC_CHANGE, RESET, DBCALL } from './types';

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

export function dbCall(products) {
    return {
        type: DBCALL,
        products
    }
}