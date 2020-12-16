import { useState, useEffect } from "react";
import axios from "axios";

import "./index.css";

/**
 * summary
 * link
 * title
 * media
 */

function News1() {
  const [summary0, setSummary0] = useState();
  const [link0, setLink0] = useState();
  const [title0, setTitle0] = useState();
  const [media0, setMedia0] = useState();

  const [summary1, setSummary1] = useState();
  const [link1, setLink1] = useState();
  const [title1, setTitle1] = useState();
  const [media1, setMedia1] = useState();

  const [summary2, setSummary2] = useState();
  const [link2, setLink2] = useState();
  const [title2, setTitle2] = useState();
  const [media2, setMedia2] = useState();

  const [summary3, setSummary3] = useState();
  const [link3, setLink3] = useState();
  const [title3, setTitle3] = useState();
  const [media3, setMedia3] = useState();

  const [summary4, setSummary4] = useState();
  const [link4, setLink4] = useState();
  const [title4, setTitle4] = useState();
  const [media4, setMedia4] = useState();

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
        console.log(response.data.articles[0].summary);
        setSummary0(response.data.articles[0].summary);
        setMedia0(response.data.articles[0].media);
        setTitle0(response.data.articles[0].title);
      })
      .catch(function (error) {
        console.error(error);
      });

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.articles[1]);
        setTitle1(response.data.articles[1].title);
        setMedia1(response.data.articles[1].media);
        setLink1(response.data.articles[1].link);
      })
      .catch(function (error) {
        console.error(error);
      });

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.articles[2]);
        setTitle2(response.data.articles[2].title);
        setMedia2(response.data.articles[2].media);
        setLink2(response.data.articles[2].link);
      })
      .catch(function (error) {
        console.error(error);
      });

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.articles[3]);
        setTitle3(response.data.articles[3].title);
        setMedia3(response.data.articles[3].media);
        setLink3(response.data.articles[3].link);
      })
      .catch(function (error) {
        console.error(error);
      });

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.articles[4]);
        setTitle4(response.data.articles[4].title);
        setMedia4(response.data.articles[4].media);
        setLink4(response.data.articles[4].link);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <div className="align">
        <div className="first-news">
          <img className="media-lg" src={media0} />
          <h1>{title0}</h1>
          <p>{summary0}</p>
        </div>
        <div className="second-news">
          <div className="sub-news">
            <img className="media-sm" src={media1} />
            <a href={link1}>{title1}</a>
          </div>
          <div className="sub-news">
            <img className="media-sm second-img" src={media2} />
            <a href={link2}>{title2}</a>
          </div>
        </div>
      </div>

      <div className="footer-news">
        <div className="footer-subnews">
          <img className="footer-news-img" src={media3} />
          <a href={link3}>{title3}</a>
        </div>
        <div className="footer-subnews">
          <img className="footer-news-img" src={media4} />
          <a href={link4}>{title4}</a>
        </div>
      </div>
    </div>
  );
}

export default News1;
