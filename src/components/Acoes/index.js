import { useState, useEffect } from "react";

import "./index.css";

/**
 * AAPL
 * MSFT
 * AMZN
 * GOOGL
 * FB
 */

function Acoes() {
  const [acoes, setAcoes] = useState([]);
  const [symbol, setSymbolApple] = useState();
  const [price, setPriceApple] = useState(0);
  const [changePercent, setChangePercentApple] = useState(0);

  const [symbolMSFT, setSymbolMSFT] = useState();
  const [priceMSFT, setPriceMSFT] = useState(0);
  const [changePercentMSFT, setChangePercentMSFT] = useState(0);

  const [symbolAMZN, setSymbolAMZN] = useState();
  const [priceAMZN, setPriceAMZN] = useState(0);
  const [changePercentAMZN, setChangePercentAMZN] = useState(0);

  const [symbolGOOGL, setSymbolGOOGL] = useState();
  const [priceGOOGL, setPriceGOOGL] = useState(0);
  const [changePercentGOOGL, setChangePercentGOOGL] = useState(0);

  const [symbolFB, setSymbolFB] = useState();
  const [priceFB, setPriceFB] = useState(0);
  const [changePercentFB, setChangePercentFB] = useState(0);

  useEffect(() => {
    fetch(
      "https://cloud.iexapis.com/stable/stock/AAPL/quote?token=pk_7ec8cc46fb254d279f290b162ae23a19"
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setSymbolApple(result.symbol);
        setPriceApple(result.latestPrice);
        setChangePercentApple(result.changePercent);
      });
    fetch(
      "https://cloud.iexapis.com/stable/stock/MSFT/quote?token=pk_7ec8cc46fb254d279f290b162ae23a19"
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setSymbolMSFT(result.symbol);
        setPriceMSFT(result.latestPrice);
        setChangePercentMSFT(result.changePercent);
      });

    fetch(
      "https://cloud.iexapis.com/stable/stock/AMZN/quote?token=pk_7ec8cc46fb254d279f290b162ae23a19"
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setSymbolAMZN(result.symbol);
        setPriceAMZN(result.latestPrice);
        setChangePercentAMZN(result.changePercent);
      });

    fetch(
      "https://cloud.iexapis.com/stable/stock/GOOGL/quote?token=pk_7ec8cc46fb254d279f290b162ae23a19"
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setSymbolGOOGL(result.symbol);
        setPriceGOOGL(result.latestPrice);
        setChangePercentGOOGL(result.changePercent);
      });

    fetch(
      "https://cloud.iexapis.com/stable/stock/FB/quote?token=pk_7ec8cc46fb254d279f290b162ae23a19"
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setSymbolFB(result.symbol);
        setPriceFB(result.latestPrice);
        setChangePercentFB(result.changePercent);
      });
  }, []);

  return (
    <div className="App">
      <div>
        <div className="align-acoes">
          <div className="acoes">
            <p className="symbol">{symbol}</p>
            <p>{price}</p>
            <p className="change-percent">+{changePercent}</p>
          </div>
          <div className="acoes">
            <p className="symbol">{symbolMSFT}</p>
            <p>{priceMSFT}</p>
            <p className="change-percent">+{changePercentMSFT}</p>
          </div>
          <div className="acoes">
            <p className="symbol">{symbolAMZN}</p>
            <p>{priceAMZN}</p>
            <p className="change-percent">+{changePercentAMZN}</p>
          </div>
          <div className="acoes">
            <p className="symbol">{symbolGOOGL}</p>
            <p>{priceGOOGL}</p>
            <p className="change-percent">+{changePercentGOOGL}</p>
          </div>
          <div className="acoes">
            <p className="symbol">{symbolFB}</p>
            <p>{priceFB}</p>
            <p className="change-percent">+{changePercentFB}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Acoes;
