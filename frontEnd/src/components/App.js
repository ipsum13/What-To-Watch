import React, { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./Header/Header";
import Login from "./LogIn/Login";
import SignUp from "./Register/SignUp";
import Landing from "./Landing/Landing";
import LikedMovies from './LikedMovies/LikedMovies'
import PrivateRoute from "./utils/PrivateRoute";

import ScrollToTop from "./utils/ScrollToTop";

import { Provider } from "react-redux";
import store from "../store";
import { loadUser } from "../actions/auth";
import setAuthToken from "./utils/setAuthToken";

const Home = lazy(() => import("./Home/Home"));
const MovieDetail = lazy(() => import("./MovieDetail/MovieDetail"));

const App = () => {
  useEffect(() => {
    setAuthToken(localStorage.token);
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop>
          <Header />
          <Suspense fallback={<div></div>}>
            <Switch>
              <Route
                exact
                path="/"
                render={() => {
                  return <Redirect to="/landing" />;
                }}
              /> 
              <PrivateRoute exact path="/home" component={Home} />
              <Route exact path="/landing" component={Landing} />
              <PrivateRoute
                exact
                path="/movies/:movieId"
                component={MovieDetail}
              />
              <PrivateRoute exact path="/liked" component={LikedMovies} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={SignUp} />
            </Switch>
          </Suspense>
        </ScrollToTop>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
