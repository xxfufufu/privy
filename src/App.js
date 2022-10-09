import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import GeneralRoute from "./route";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GeneralRoute />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
