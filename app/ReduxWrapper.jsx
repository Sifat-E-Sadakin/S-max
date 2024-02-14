"use client";

import { store } from "./store";
import { Provider } from "react-redux";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { usersApi } from "./store/usersApiQuery";

const ReduxWrapper = ({ children }) => {
  return (
    <Provider store={store}>
      {/* <ApiProvider api={usersApi}>{children}</ApiProvider> */}
      {children}
    </Provider>
  );
};

export default ReduxWrapper;
