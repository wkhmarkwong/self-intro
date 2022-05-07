import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TopBar from "./components/topBar/TopBar";
import Welcome from "./components/welcome/Welcome";
import Project from "./components/project/Project";
import Leetcode from "./components/leetcode/Leetcode";
import Skillset from "./components/skillset/Skillset";
import Japanese from "./components/japanese/Japanese";
import Bottom from "./components/bottom/Bottom";

import React from "react";

function App() {
  return (
    <div>
      <TopBar />
      <Welcome />
      <Project />
      <Skillset />
      <Leetcode />
      <Japanese />
      <Bottom />
    </div>
  );
}

export default App;
