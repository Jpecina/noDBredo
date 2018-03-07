import React, {Component} from 'react';
import axios from 'axios';
import Items from './DisplayItems';


class MainPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            newsArticles:[]
        }
    }
    componentDidMount(){
        axios.get("/api/gameNews").then(response => {
          this.setState({ newsArticles: response.data[0]})
          console.log(response.data);
      }).catch(err => console.log(err))}
    render(){
        console.log(this.state.newsArticles);
        const newsList = this.state.newsArticles.map((article,i)=>{
            return (
                <div key = {i}>
                    <Items img = {article.urlToImage} title = {article.title} author = {article.author} description = {article.description}/>
                </div>
                
            )
        })
        return(
            <div className="mainpage-render">{newsList}</div>
        )
    }
}

export default MainPage;