import Button from "@material-ui/core/Button";

import Header from "../../components/Header";
import News from "../../components/News2";
import Acoes from "../../components/Acoes";
import Graficos from "../../components/Graficos";
import Footer from "../../components/Footer";

import "./index.css";

function App() {
  return (
    <div className="App">
      <Header />

      <Acoes />
      <News />
      <Graficos />
      <Footer />
    </div>
  );
}

export default App;
