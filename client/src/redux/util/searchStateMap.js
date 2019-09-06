export const searchStateMap = (state, ownProps) => {
    return {
        term: state.term,
        loc: state.loc
    };
}