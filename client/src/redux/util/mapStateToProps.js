export const searchStateMap = (state, ownProps) => {
    return {
        term: state.searchState.term,
        loc: state.searchState.loc
    };
}

export const productsMap = (state, ownProps) => {
    return {
        products: state.requestReducer.products
    }
}

export const mapStateToProps = (state, ownProps) => {
    return {
        term: state.searchState.term,
        loc: state.searchState.loc,
        products: state.requestReducer.products
    }
}