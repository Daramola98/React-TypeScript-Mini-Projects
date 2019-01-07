import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/Project5/components/App";
import store from "./components/Project5/store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
