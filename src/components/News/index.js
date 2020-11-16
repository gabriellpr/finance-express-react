import { useState, useEffect } from "react";

import Header from "../../components/Header";

import "./index.css";

function News() {
  const [news, setNews] = useState("");

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
      <div className="noticias">{news}</div>
    </div>
  );
}

export default News;
