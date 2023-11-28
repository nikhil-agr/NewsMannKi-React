import React from "react";

const NewsItem = (props)=> {
    let {title, description, imageUrl, newsUrl, author, date, source} = props;
    return (
      <div className="my-3">
        <div className="card text-bg-dark m-4" > 
        <span className="position-absolute top-0 start-100 z-index-1 translate-middle badge rounded-pill bg-danger">{source}</span>
          <img src={imageUrl?imageUrl:"https://static.vecteezy.com/system/resources/thumbnails/006/299/370/original/world-breaking-news-digital-earth-hud-rotating-globe-rotating-free-video.jpg"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text"> {description}... </p>
            <p className="card-text"><small className="text-secondary">By {!author?"Unknown":author} on {new Date(date).toGMTString()} </small></p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-warning"> Read More </a>
          </div>
        </div>
      </div>
    );

}

export default NewsItem;
