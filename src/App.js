import "./App.css";
import Home from "./component/Home";
import Game from "./component/Game";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Game" element={<Game />} />
          <Route exact path="/leaderboard" element={<Game />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
