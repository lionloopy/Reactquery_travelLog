import { configureStore } from "@reduxjs/toolkit";
import logSlice from "../modules/logSlice";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore } from "@reduxjs/toolkit";

const store = createStore(
  logSlice,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
