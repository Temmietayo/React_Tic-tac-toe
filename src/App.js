import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Board from "./components/board";
import Scoreboard from "./components/scoreboard";

import "./styles/board.css";
import "./styles/box.css";
import "./styles/buttons.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Scoreboard} />
        <Route path="/board" component={Board} />
      </BrowserRouter>
    </div>
  );
}

export default App;
