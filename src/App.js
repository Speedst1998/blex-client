import logo from "./logo.svg";
import "./App.css";
import ReactHlsPlayer from "react-hls-player";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ReactHlsPlayer
          src="http://127.0.0.1:8080/stream/playlist.m3u8"
          autoPlay={false}
          controls={true}
          width="100%"
          height="auto"
        />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
