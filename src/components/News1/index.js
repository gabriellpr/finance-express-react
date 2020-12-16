import { useState, useEffect } from "react";
import axios from "axios";

import "./style.css";

function News1() {
  const [news, setNews] = useState([]);
  const options = {
    method: "GET",
    url: "https://newscatcher.p.rapidapi.com/v1/latest_headlines",
    params: { lang: "en", media: "True" },
    headers: {
      "x-rapidapi-key": "152bd4b7bbmsh7872e47285841e9p13c288jsn0b0e587859e5",
      "x-rapidapi-host": "newscatcher.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.articles);
        setNews(response.data.articles);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div className="App">
      <div className="align">
        {news.map((i) => (
          <div className="news" key={i.id}>
            <img className="imagem" src={i.media} />
            <h1>{i.title}</h1>
            <p>{i.summary}</p>
            <a href={i.link}>Link: {i.link}</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News1;
