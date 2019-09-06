import { TERM_CHANGE, LOC_CHANGE, RESET } from './types';

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