import React from "react";
import "./App.css";

// Components
import PathfindingVisualizer from "./components/PathfindingVisualizer";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pathfinder</h1>
      </header>
      <PathfindingVisualizer></PathfindingVisualizer>
      <Footer></Footer>
    </div>
  );
}

export default App;
