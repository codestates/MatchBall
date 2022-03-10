import "./App.css";
import Matches from "./pages/Matches";
import axios from "axios";
import { useState } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import RegisterPage from "./pages/RegisterPage";
import MyPage from "./pages/MyPage";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [matchData, setMatchData] = useState([]);
  const [userAccessToken, setUserAccessToken] = useState("");
  const [userInfo, setUserInfo] = useState("");

  const isAuthenticated = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/matches/list`, {
        cookie: userAccessToken,
      })
      .then((res) => {
        setMatchData(res.data.matchesdata);
        // localStorage.setItem("matchData", JSON.stringify(res.data));
        localStorage.setItem("isLogin", true);
      });
  };

  const handleResponseSuccess = () => {
    isAuthenticated();
  };

  const handleLogout = () => {
    axios.post(`${process.env.REACT_APP_API_URL}/users/signout`).then((res) => {
      setIsLogin(false);
    });
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {/* <LandingPage /> */}
          {localStorage.getItem("isLogin") ? (
            <Redirect to="/matches" />
          ) : (
            <LandingPage />
          )}
        </Route>

        <>
          <Nav />

          <Route path="/signin">
            <LoginPage
              title="로그인"
              handleResponseSuccess={handleResponseSuccess}
              setUserAccessToken={setUserAccessToken}
              setUserInfo={setUserInfo}
            />
            {localStorage.getItem("isLogin") ? (
              <Redirect to="/matches" />
            ) : (
              <Redirect to="/signin" />
            )}
          </Route>

          <Route path="/signup">
            <SignUpPage />
          </Route>

          <Route path="/mypage">
            {localStorage.getItem("isLogin") ? (
              <MyPage handleLogout={handleLogout} />
            ) : (
              <Redirect to="/signin" />
            )}
          </Route>

          <Route path="/matches/new">
            <RegisterPage />
          </Route>

          <Route path="/matches">
            <Matches data={matchData} />
          </Route>

          <Footer />
        </>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
