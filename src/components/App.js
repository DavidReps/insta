import React, { useState } from "react";
import initialStore from "utils/initialStore";
import css from "./App.module.css";
import Header from "./Header.js";
import Home from "./Home.js";
import Explore from "./Explore.js";
import NewPost from "./NewPost.js";
import Activity from "./Activity.js";
import Profile from "./Profile.js";
import Navbar from "./Navbar.js";
import uniqueId from "utils/uniqueId.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StoreContextProvider from 'contexts/StoreContext.js';
import Login from "./Login";
import Signup from "./Signup";

function App() {


  return (
    <Router>
            <StoreContextProvider>
      <div className={css.container}>
        <Header />
        <main className={css.content}>
          <Switch>
          <Route path="/login">
	          <Login />
            </Route>
            <Route path="/signup">
            <Signup />
            </Route>
            <Route path="/home">
              <Home/>
            </Route>
            <Route path="/explore">
              <Explore />
            </Route>
            <Route path="/activity">
              <Activity />
            </Route>
            <Route path="/newpost">
              <NewPost/>
            </Route>
            <Route path="/profile/:userId?">
              <Profile/>
            </Route>
            <Route path="/:postId?">
              <Home/>
            </Route>
          </Switch>
        </main>
        <Navbar />
      </div>
      </StoreContextProvider>
    </Router>
  );
}

export default App;

