import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./components/Project6/store";
import App from "./components/Project7/components/App";

ReactDOM.render(
  // <Provider store={store}>
  <App />,
  // </Provider>,
  document.getElementById("root")
);
