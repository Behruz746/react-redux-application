import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./store"; // projectni function va malumotlari
import { Provider } from "react-redux"; // Provider  store malumotlari bilan projectni o'rab olish

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
