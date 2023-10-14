import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div className="my-3">
        <div className="card text-bg-dark m-2" style={{width: "18rem"}}>
          <img src={imageUrl?imageUrl:"https://static.vecteezy.com/system/resources/thumbnails/006/299/370/original/world-breaking-news-digital-earth-hud-rotating-globe-rotating-free-video.jpg"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text"> {description}... </p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-warning"> Read More </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
