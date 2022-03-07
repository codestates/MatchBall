import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Matches from "./pages/Matches";
import axios from "axios";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/signin">
          <LoginPage />
        </Route>
        <Route path="/signup">
          <SignUpPage />
        </Route>
        {/* <Route path="/mypage">
          <MyPage />
        </Route> */}
        <Route path="/matches">
          <Matches />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
