import { useState, useEffect } from "react";

import Header from "../../components/Header";

import "./index.css";

function News() {
  const [news, setNews] = useState([]);

  useEffect(async () => {
    /**api_key=a0f0d60d6c6a436ea46f321fc4ec55e4
    fetch(
      "http://newsapi.org/v2/top-headlines?country=us&apiKey=a0f0d60d6c6a436ea46f321fc4ec55e4"
    )
      .then((res) => res.json())
      .then((result) => {
        //console.log(result.articles);
        setNews([...news  , news.articles]);
      });
      */
    const response = await fetch(
      "http://newsapi.org/v2/top-headlines?country=us&apiKey=a0f0d60d6c6a436ea46f321fc4ec55e4"
    );
    const json = await response.json();
    //console.log(json.totalResults);

    setNews(json.articles);
  });

  return (
    <div className="App">
      <div className="">
        {news.map((i) => (
          <div className="noticias" key={i._id}>
            <h1>{i.title}</h1>
            <h2>{i.description}</h2>
            <img src={i.urlToImage} />
            <p>{i.content}</p>
            <a href={i.url} target="_blank">
              {i.url}
            </a>
            <p>{i.publishedAt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
