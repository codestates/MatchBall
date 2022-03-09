import "./App.css";
import Matches from "./pages/Matches";
import axios from "axios";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import UserInfoEditPage from "./pages/UserInfoEditPage";
import MyPage from "./pages/MyPage";
import RegisterPage from "./pages/RegisterPage";
import Contents from "./components/Contents";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [matchData, setMatchData] = useState([]);
  const [userAccessToken, setUserAccessToken] = useState("");
  // const history = useHistory();

  const isAuthenticated = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/matches/list`, {
        cookie: userAccessToken,
      })
      .then((res) => {
        setMatchData(res.data);
        setIsLogin(true);
        // history.push("/matches");
      });
  };

  const handleResponseSuccess = () => {
    isAuthenticated();
  };

  const handleLogout = () => {
    axios.post(`${process.env.REACT_APP_API_URL}/users/signout`).then((res) => {
      setIsLogin(false);
      // history.push("/signin");
    });
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>

        <Route path="/signin">
          <LoginPage
            title="로그인"
            handleResponseSuccess={handleResponseSuccess}
            setUserAccessToken={setUserAccessToken}
          />
        </Route>

        <Route path="/signup">
          <SignUpPage />
        </Route>

        <Route path="/mypage">
          {isLogin ? (
            // <MyPage handleLogout={handleLogout} />
            <Redirect to="/" />
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
      </Switch>
    </BrowserRouter>
  );
}

export default App;
