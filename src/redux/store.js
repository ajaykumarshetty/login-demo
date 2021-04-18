import { applyMiddleware, createStore} from "redux"
import ThunkMiddleware from "redux-thunk"

import reducers from "./reducers/index";


const store = createStore(reducers , applyMiddleware(ThunkMiddleware));

export default store