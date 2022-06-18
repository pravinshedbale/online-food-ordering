import { configureStore } from "./State/Store";
import { Provider } from "react-redux";
import Home from "./Pages/Home";
const App = () => {
  return (
    <Provider store={configureStore()}>
      <Home></Home>
    </Provider>
  );
};

export default App;
