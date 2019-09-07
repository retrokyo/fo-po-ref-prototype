import { REQUEST } from '../actions/types';
import { initialProductsState } from '../util/initialState';

function requestReducer(state=initialProductsState, action) {
    switch (action.type) {
        case REQUEST:
            return Object.assign({}, state, {
                products: action.products
            });
        
        default:
            return state;
    }
}

export default requestReducer;