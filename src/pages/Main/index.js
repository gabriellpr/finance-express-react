import { useState, useEffect } from "react";

import Header from "../../components/Header";
import News from "../../components/News";
import Acoes from "../../components/Acoes";

import "./index.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Acoes />
      <News />
    </div>
  );
}

export default App;
