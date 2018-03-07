const axios = require("axios");
const {apiKey} = require('../config')

let articles = [];

const getNews = (req, res, next) => {
  axios
    .get(`https://newsapi.org/v2/top-headlines?sources=polygon&apiKey=${apiKey}`
    )
    .then(response => {
      articles.push(response.data.articles);
      res.json(articles); 
      console.log(articles);
    })
    .catch(console.log);  
};

module.exports = {

  getNews: getNews

};
