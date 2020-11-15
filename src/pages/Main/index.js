import { useState, useEffect } from "react";

import Header from "../../components/Header";

function App() {
  const [symbol, setSymbol] = useState();

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
      <Header />
      {symbol}
    </div>
  );
}

export default App;
