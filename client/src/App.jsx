import React, { useState } from "react";
import "./styles.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// COMPONENTS
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./pages/Home/Home";
import { HomeApi } from "./pages/HomeApi/HomeApi";
import { Register } from "./pages/Register/Register";
import { Single } from "./pages/Single/Single";
import { SingleInfo } from "./pages/SingleInfo/SingleInfo";
import { SingleVideo } from "./pages/SingleVideo/SingleVideo";
import { Login } from "./pages/Login/Login";
import { NotFound } from "./pages/NotFound/NotFound";
// context hooks
import { useAuthContext } from "context";
// PROVIDERS
import { HomeProvider } from "./context/HomeContext/HomeContext";
import { ApiHomeProvider } from "./context/ApiHomeContext/ApiHomeContext";

function App() {
  // JUST FOR TEST NOw
  const { user } = useAuthContext();
  return (
    <>
      <Router>
        <HomeProvider>
          <ApiHomeProvider>
            <Navbar user={user} />
            <AnimatePresence exitBeforeEnter initial={false}>
              <Switch>
                {/* REGISTER ROUTE  */}

                <Route exact path="/register">
                  {user ? <Redirect to="/" /> : <Register />}
                </Route>
                {/* LOGIN ROUTE  */}
                <Route exact path="/login">
                  {user ? <Redirect to="/" /> : <Login />}
                </Route>
                {/* HOME ROUTES  */}
                {!user ? (
                  <Redirect to="/register/" />
                ) : (
                  <>
                    <Route exact path="/">
                      <Home type="" />
                    </Route>
                    <Route exact path="/movies">
                      <Home type="movies" />
                    </Route>
                    <Route exact path="/series">
                      <Home type="series" />
                    </Route>
                    <Route exact path="/single/:title">
                      <Single />
                    </Route>
                    <Route exact path="/single/:title/info">
                      <SingleInfo />
                    </Route>
                    <Route exact path="/single/:title/video">
                      <SingleVideo />
                    </Route>
                    {/* HOME API ROUTES  */}
                    <Route exact path="/movies/250imdb">
                      <HomeApi type="movies" />
                    </Route>
                    <Route exact path="/series/250imdb">
                      <HomeApi type="series" />
                    </Route>
                  </>
                )}

                {/* NOT FOUND ROUTE  */}
                <Route path="*">
                  <NotFound />
                </Route>
              </Switch>
            </AnimatePresence>
          </ApiHomeProvider>
        </HomeProvider>
      </Router>
    </>
  );
}

export default App;
