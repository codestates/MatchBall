import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [str, setStr] = useState("aa");
  const init = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/`).then((res) => {
      setStr(res.data.data);
    });
  };

  // useEffect(() => {
  //   init();
  // }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <button onClick={init}>button</button>
        </p>
        <p>{str}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
