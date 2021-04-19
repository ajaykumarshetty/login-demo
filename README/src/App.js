import { Provider } from "react-redux";

import './App.css';
import Main from "./views/index";
import store from "./redux/store"

function App() {
  return (
    <div>
      <Provider store={store}>
        <Main />
      </Provider>
    </div>
  );
}

export default App;
