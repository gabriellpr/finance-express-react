import { useState, useEffect } from "react";

import Header from "../../components/Header";

import "./index.css";

function Acoes() {
  const [symbol, setSymbol] = useState();
  const [price, setPrice] = useState(0);
  const [percentChange, setPercentChange] = useState(0);

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

  return (
    <div className="App">
      <a>Robos</a>
      <div className="acoes">{symbol}</div>
    </div>
  );
}

export default Acoes;
