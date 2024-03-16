const INITIAL_STATE = {
  final: 0,
};
function numReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "NUM_ADD":
      return {
        ...state,
        final: state.final + action.input,
      };
    case "NUM_SUB":
      return {
        ...state,
        final: state.final - action.input,
      };
    case "NUM_DIV":
      return {
        ...state,
        final: state.final / action.input,
      };
    case "NUM_MUL":
      return {
        ...state,
        final: state.final * action.input,
      };
    default:
      return {
        ...state,
      };
  }
}
export default numReducer;
