import React, { useEffect, useState } from "react";
import Card from "./Card";
import Loader from "./Loader";
const Newscard = ({ category }) => {
const [article, setArticle] = useState([]);
const [loader, setLoader] = useState(true);






  useEffect(() => {
    setLoader(true);
    const URL = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.REACT_APP_API_KEY}`;

    setTimeout(() => {
      fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        let result = data.articles;
        // console.log(result)
        setArticle(result);
        setLoader(false);
      });
      
    }, 500);

  }, [category]);

  return (
    <>
      <div className="container py-5">
        <div className="row justify-content-center">
          {loader ? (
            <Loader />
          ) : (
            article.map((article, index) => {
              return (
                <Card
                  key={article.url || index}
                  news_title={article.title}
                  news_img={article.urlToImage}
                  news_description={article.description}
                  news_link={article.url}
                />
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default Newscard;
