import TradingViewWidget, { Themes } from "react-tradingview-widget";

import "./style.css";

const App = () => (
  <div className="grafico">
    <TradingViewWidget
      symbol="NASDAQ:GOOGL"
      theme={Themes.DARK}
      locale="fr"
      autosize
    />
  </div>
);

export default App;
