import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {
  HomeProvider,
  UserProvider,
  AuthProvider,
  MovieProvider,
  ListProvider,
} from "contexts";

ReactDOM.render(
  <React.StrictMode>
    <HomeProvider>
      <AuthProvider>
        <UserProvider>
          <MovieProvider>
            <ListProvider>
              <App />
            </ListProvider>
          </MovieProvider>
        </UserProvider>
      </AuthProvider>
    </HomeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
