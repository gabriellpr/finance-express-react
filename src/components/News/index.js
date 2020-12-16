import Carousel from "react-multi-carousel";
import { useState, useEffect } from "react";

//import { getBitcoinArticles } from "../../services/apiNews";

import "./index.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30,
  },
};

function News() {
  const [news, setNews] = useState([]);

  useEffect(async () => {
    const abortController = new AbortController();

    //api_key=a0f0d60d6c6a436ea46f321fc4ec55e4

    const response = await fetch(
      "http://newsapi.org/v2/top-headlines?country=us&apiKey=a0f0d60d6c6a436ea46f321fc4ec55e4",
      { signal: abortController.signal }
    );
    const json = await response.json();
    //console.log(json.totalResults);

    setNews(json.articles);
    return () => {
      abortController.abort();
    };
  }, []);

  //getBitcoinArticles();

  return (
    <div className="App">
      <Carousel
        ssr
        partialVisbile
        itemClass="image-item"
        responsive={responsive}
      >
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
      </Carousel>
    </div>
  );
}

export default News;
