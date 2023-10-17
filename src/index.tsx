import ReactDOM from "react-dom/client";
import "./index.css";

import reportWebVitals from "./reportWebVitals";

import { applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/app/app";
import { burgersMiddleware, rootReducer } from "./services/reducers";
import { I18nextProvider } from "react-i18next";
import i18n from "./utils/translates/lang";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(burgersMiddleware),
  devTools: process.env.NODE_ENV !== "production",
  enhancers: [applyMiddleware(thunk)],
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    {/* <React.StrictMode> */}
    <Router>
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <App />
        </I18nextProvider>
      </Provider>
    </Router>
    {/* </React.StrictMode> */}
  </>
);

reportWebVitals();
