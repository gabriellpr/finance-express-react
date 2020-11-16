import { useState, useEffect } from "react";

import Header from "../../components/Header";
import News from "../../components/News";
import Acoes from "../../components/Acoes";

import "./index.css";

function App() {
  const [symbol, setSymbol] = useState();
  const [price, setPrice] = useState(0);
  const [percentChange, setPercentChange] = useState(0);
  const [news, setNews] = useState("");

  useEffect(() => {
    fetch(
      "https://cloud.iexapis.com/stable/stock/AAPL/quote?token=pk_7ec8cc46fb254d279f290b162ae23a19"
    )
      .then((res) => res.json())
      .then((result) => {
        //console.log(result);
        setSymbol(result.close);
      });
  });

  useEffect(() => {
    /**api_key=a0f0d60d6c6a436ea46f321fc4ec55e4 */
    fetch(
      "http://newsapi.org/v2/top-headlines?country=us&apiKey=a0f0d60d6c6a436ea46f321fc4ec55e4"
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(result.articles);
        setNews(result.articles[0].title);
      });
  });

  return (
    <div className="App">
      <Header />
      <Acoes />
      <News />
    </div>
  );
}

export default App;
