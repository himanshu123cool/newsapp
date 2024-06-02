import React from 'react';
import FallBackNewsImg from '../assets/news.jpg';

const Card = ({news_img, news_title, news_description, news_link}) => {


  return (
    <>
    <div className="col-12 col-sm-4 mb-4">
      <div className="card" style={{width: '100%', height: '100%'}}>
  <img src={news_img ? news_img : FallBackNewsImg} className="card-img-top" alt={news_title}/>
  <div className="card-body">
    <h5 className="card-title fw-bold">{news_title? news_title.slice(0,50)+"...": news_title}</h5>
    <p className="card-text">{news_description ? news_description.slice(0,90) + "...": news_description}</p>
    <a href={news_link} className="btn card_btn" target='_blank' rel="noreferrer">Read More</a>
  </div>
</div>
</div>
    </>
  )
}

export default Card
