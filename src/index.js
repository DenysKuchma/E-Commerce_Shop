import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import client from "./utils/client";
import { ApolloProvider } from "@apollo/client";
import getStore from "./components/redux";
import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(document.getElementById("root"));

export const store = getStore();

root.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <BrowserRouter basename="/E-Commerce_Shop">
        <ToastContainer />
        <App />
      </BrowserRouter>
    </Provider>
  </ApolloProvider>
);

reportWebVitals();
