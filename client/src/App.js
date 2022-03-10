import "./App.css";
import Matches from "./pages/Matches";
import axios from "axios";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import RegisterForm from "./components/RegisterForm";
import MyPage from "./pages/MyPage";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import UserEditForm from "./components/UserEditForm";
import MatchDetailsPage from "./pages/MatchDetailsPage";
import RegisterDetailsPage from "./pages/RegisterDetailsPage";
import WritingDetailInfo from "./components/WritingDetailInfo";

// TODO: 내가 작성한 글 보여주기 POST body -> user.id res => 글 리스트

function App() {
  const [isLogin, setIsLogin] = useState(
    () => localStorage.getItem("isLogin") || false
  );
  const [matchData, setMatchData] = useState(() =>
    JSON.parse(localStorage.getItem("matchData"))
  );

  const [userInfo, setUserInfo] = useState(
    () =>
      JSON.parse(localStorage.getItem("userInfo")) || {
        id: "",
        email: "",
        nickname: "",
      }
  );

  const [userAccessToken, setUserAccessToken] = useState("");

  const [myTextData, setMyTextData] = useState([]);
  const [detailText, setDetailText] = useState(
    () =>
      JSON.parse(localStorage.getItem("detailText")) || {
        user: { nickname: "" },
      }
  );

  const isAuthenticated = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/matches/list`, {
        cookie: localStorage.getItem("accessToken"),
      })
      .then((res) => {
        setMatchData(res.data.matchesdata);
        setIsLogin(true);
        localStorage.setItem("isLogin", true);
      });
  };

  const handleResponseSuccess = () => {
    isAuthenticated();
  };

  const handleLogout = () => {
    axios.post(`${process.env.REACT_APP_API_URL}/users/signout`).then((res) => {
      setIsLogin(false);
      localStorage.clear();
      alert(JSON.stringify(res.data));
      setUserInfo({ id: "", nickname: "" });
    });
  };

  const getMyText = () => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/mypage/matches`, {
        user_id: userInfo.id,
      })
      .then((res) => {
        setMyTextData(res.data.data);
      });
  };

  const viewDetailText = (id) => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/matches`, {
        id: id,
      })
      .then((res) => {
        setDetailText(res.data.matchdata);
        localStorage.setItem("detailText", JSON.stringify(res.data.matchdata));
      });
  };

  useEffect(() => {
    localStorage.setItem("matchData", JSON.stringify(matchData));
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    localStorage.setItem("detailText", JSON.stringify(detailText));
  }, [matchData, userInfo, detailText]);

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
          <Nav userInfo={userInfo} />

          <Route path="/signin">
            <LoginPage
              title="로그인"
              handleResponseSuccess={handleResponseSuccess}
              setUserAccessToken={setUserAccessToken}
              setUserInfo={setUserInfo}
            />
            {isLogin ? <Redirect to="/matches" /> : <Redirect to="/signin" />}
          </Route>

          <Route path="/signup">
            <SignUpPage />
          </Route>

          <Route path="/mypage/edit">
            {isLogin ? (
              <UserEditForm
                disabled="true"
                userInfo={userInfo}
                setUserInfo={setUserInfo}
              />
            ) : (
              <Redirect to="/signin" />
            )}
          </Route>

          <Route path="/mypage/orders">
            {isLogin ? <MatchDetailsPage /> : <Redirect to="/signin" />}
          </Route>

          <Route path="/mypage/matches">
            {isLogin ? (
              <RegisterDetailsPage myTextData={myTextData} />
            ) : (
              <Redirect to="/signin" />
            )}
          </Route>

          <Route exact path="/mypage">
            {isLogin ? (
              <MyPage handleLogout={handleLogout} getMyText={getMyText} />
            ) : (
              <Redirect to="/signin" />
            )}
          </Route>

          <Route path="/matches/new">
            {isLogin ? (
              <RegisterForm
                title="작성하기"
                click="등록하기"
                path="/matches"
                userInfo={userInfo}
                isAuthenticated={isAuthenticated}
              />
            ) : (
              <Redirect to="/signin" />
            )}
          </Route>

          <Route path="/matches/edit">
            {isLogin ? (
              <RegisterForm
                title="수정하기"
                click="수정하기"
                path="/mypage/matches"
              />
            ) : (
              <Redirect to="/signin" />
            )}
          </Route>

          <Route path="/matches/detail">
            {isLogin ? (
              <WritingDetailInfo
                detailText={detailText}
                userInfo={userInfo}
                isAuthenticated={isAuthenticated}
              />
            ) : (
              <Redirect to="/signin" />
            )}
          </Route>

          <Route exact path="/matches">
            <Matches data={matchData} viewDetailText={viewDetailText} />
          </Route>

          <Footer />
        </>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
