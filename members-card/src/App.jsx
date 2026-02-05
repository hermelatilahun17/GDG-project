import React from "react";
import Team from "./components/Team";
import "./index.css";

function App() {
  return (
    <div className="app">
      <header style={{ textAlign: "center", marginTop: "40px" }}>
        <h1>Welcome to Our Team</h1>
        <p>Meet the amazing people behind this project</p>
      </header>

      {/* Render the team */}
      <Team />
    </div>
  );
}

export default App;
