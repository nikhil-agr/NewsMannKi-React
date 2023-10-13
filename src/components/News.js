import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {

  
    constructor(){
        super();
        // console.log("Hello! I am a Constructor from a NEWS Component!")

        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
          
    }

    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=2c93bc1669204e2da842b657636d84c9&page=1&pageSize=21";
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})
    }

    handlePrevClick = async ()=>{
        console.log("Previous");

        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=2c93bc1669204e2da842b657636d84c9&page=${this.state.page - 1}&pageSize=21`;
        let data = await fetch(url);
        let parsedData = await data.json();

        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        })

        console.log(parsedData);
    }

    handleNextClick = async ()=>{
        console.log("Next");
        if(this.state.page + 1 > Math.ceil(this.state.totalResults/21)){

        }
        else{
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=2c93bc1669204e2da842b657636d84c9&page=${this.state.page + 1}&pageSize=21`;
            let data = await fetch(url);
            let parsedData = await data.json();
            console.log(parsedData);
    
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles
            })
        }

    }

  render() {
    return (
      <>
        <div className="container my-3">
          <h2>NewsMannKi - Top Headlines</h2>
          <div className="row">
            {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title?element.title.slice(0, 45):""} description={element.description?element.description.slice(0, 90):""} imageUrl={element.urlToImage} newsUrl={element.url} />
            </div>
            })}
          </div>
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </>
    );
  }
}

export default News;
