import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {

    articles = [
        {
          "source": { "id": "bbc-sport", "name": "BBC Sport" },
          "author": null,
          "title": "NZ's Ravindra brings up his 50 with huge six",
          "description": "Watch as New Zealand's Rachin Ravindra hits Moeen Ali for a huge six to bring up his 50 off 36 balls against England during the opening game of the 2023 Cricket World Cup in India.",
          "url": "http://www.bbc.co.uk/sport/av/cricket/67017937",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/cpsprodpb/14EA9/production/_131337658_p0gjmynd.jpg",
          "publishedAt": "2023-10-05T14:07:17.6472356Z",
          "content": "Watch as New Zealand's Rachin Ravindra hits Moeen Ali for a huge six to bring up his 50 off 36 balls against England during the opening game of the 2023 Cricket World Cup in India.\r\nFOLLOW: England v… [+41 chars]"
        },
        {
          "source": { "id": "le-monde", "name": "Le Monde" },
          "author": "Philippe Escande",
          "title": "Coupe du monde de cricket : « L’affirmation de la nouvelle puissance de l’Inde dans le monde »",
          "description": "Pour la quatrième fois, la péninsule indienne accueille la Coupe du monde de cricket.  Les sponsors se sont bousculés pour avancer leurs pions sur l’un des seuls grands pays affichant encore une forte croissance dans le monde.",
          "url": "https://www.lemonde.fr/economie/article/2023/10/05/coupe-du-monde-de-cricket-l-affirmation-de-la-nouvelle-puissance-de-l-inde-dans-le-monde_6192604_3234.html",
          "urlToImage": "https://img.lemde.fr/2023/10/05/0/0/4648/3099/1440/960/60/0/b1337eb_1696496032461-000-33xb8ed.jpg",
          "publishedAt": "2023-10-05T09:30:09Z",
          "content": "Le stade Narendra Modi, à Ahmedabad, mercredi 4 octobre 2023. SAM PANTHAKY / AFP\r\nAngleterre - Nouvelle-Zélande. Ce nest pas laffiche de la prochaine finale du Mondial de rugby, qui se déroule en Fra… [+2407 chars]"
        },
        {
          "source": { "id": "talksport", "name": "TalkSport" },
          "author": "Sean O'Brien",
          "title": "Fans bemused as England begin Cricket World Cup in almost-empty stadium despite world-beating capacity...",
          "description": "England and New Zealand kicked off the 2023 Cricket World Cup in a nearly-empty stadium on Thursday. The Narendra Modi Stadium in Ahmedabad is hosting the opening match of the tournament in India a…",
          "url": "https://talksport.com/sport/cricket/1589618/fans-england-cricket-world-cup-empty-stadium-capacity/",
          "urlToImage": "https://talksport.com/wp-content/uploads/sites/5/2023/09/players-england-new-zealand-line-850197108.jpg?strip=all&quality=100&w=1920&h=1080&crop=1",
          "publishedAt": "2023-10-05T08:58:02Z",
          "content": "England and New Zealand kicked off the 2023 Cricket World Cup in a nearly-empty stadium on Thursday. \r\nThe Narendra Modi Stadium in Ahmedabad is hosting the opening match of the tournament in India a… [+1061 chars]"
        },
        {
          "source": { "id": "bbc-sport", "name": "BBC Sport" },
          "author": null,
          "title": "World Cup: England bat first after NZ win toss - clips, radio & text",
          "description": "Follow live text, in-play video clips and radio commentary as England play New Zealand in the opening game of the Men's Cricket World Cup 2023.",
          "url": "http://www.bbc.co.uk/sport/live/cricket/66854204",
          "urlToImage": "https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.23.3/images/bbc-sport-logo.png",
          "publishedAt": "2023-10-05T08:22:25.5339012Z",
          "content": "England: Jonny Bairstow, Dawid Malan, Joe Root, Harry Brook, Jos Buttler (capt/wk), Moeen Ali, Liam Livingstone, Chris Woakes, Sam Curran, Adil Rashid, Mark Wood.\r\nNew Zealand: Devon Conway, Will You… [+145 chars]"
        },
        {
          "source": { "id": "al-jazeera-english", "name": "Al Jazeera English" },
          "author": "Hafsa Adil",
          "title": "LIVE: England vs New Zealand – ICC Cricket World Cup 2023",
          "description": "Follow live updates from the tournament opener as defending champions England face New Zealand in Ahmedabad, India.",
          "url": "http://www.aljazeera.com/sports/liveblog/2023/10/5/live-england-vs-new-zealand-icc-cricket-world-cup-2023",
          "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/10/ICC-Mens-Cricket-World-Cup-2023-captains-1696441740.jpeg?resize=1920%2C1440",
          "publishedAt": "2023-10-05T05:30:15Z",
          "content": "blinking-dot\r\nLive MatchLive Match, \r\nThe ICC Cricket World Cup 2023 gets under way with defending champions England taking on last tournaments runners-up New Zealand at the Narendra Modi Stadium in … [+16 chars]"
        },
        {
          "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
          "author": null,
          "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
          "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
          "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
          "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
          "publishedAt": "2020-04-27T11:41:47Z",
          "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },
        {
          "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
          "author": null,
          "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
          "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
          "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
          "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
          "publishedAt": "2020-03-30T15:26:05Z",
          "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        }
      ]
  
    constructor(){
        super();
        // console.log("Hello! I am a Constructor from a NEWS Component!")

        this.state = {
            articles: this.articles,
            loading: false
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
              <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
            </div>
            })}
          </div>
        </div>
      </>
    );
  }
}

export default News;
