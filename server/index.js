const express = require("express");
const {json} = require("body-parser");
const cors = require("cors");

const port = 3001;

const app = express();

app.use(json());
app.use(cors());

const { getNews } = require(`${__dirname}/controllers/mainCtrl`);

app.get("/api/gameNews", getNews);

app.listen(port, () => {
  console.log(`Listening on super port: ${port}`);
});
