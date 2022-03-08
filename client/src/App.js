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
import ResisterForm from "./components/RegisterForm";
import UserInfoEditPage from "./pages/UserInfoEditPage";
import MyPage from "./pages/MyPage";
import RegisterPage from "./pages/RegisterPage";
import RegisterEdigPage from "./pages/RegisterEdigPage";
import Contents from "./components/Contents";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/signin">
          <LoginPage title="로그인" />
        </Route>
        <Route path="/signup">
          <SignUpPage />
        </Route>
        <Route path="/mypage">
          <MyPage />
        </Route>
        <Route path="/matches/new">
          <RegisterPage />
        </Route>
        <Route path="/matches">
          <Matches />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
