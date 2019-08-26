export const searchState = (state, ownProps) => {
    return {
        term: state.term,
        loc: state.loc
    };
}