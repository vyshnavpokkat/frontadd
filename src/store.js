import { createStore } from "redux";
import calcReducer from "./Reducers/calcreducer";

// export default () => {
 export const store = createStore(
    calcReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
//   return { store };
// };
