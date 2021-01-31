import { Tweets } from "./pages/Tweets";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div className="main-heading">Tweet Saver</div>
        <div className="sub-heading">
          (Technical assignment developed for Global Relay)
        </div>
      </div>
      <Tweets />
    </div>
  );
}

export default App;
