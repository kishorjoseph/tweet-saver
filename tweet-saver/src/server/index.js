var express = require("express");
var Twit = require("twit");
var app = express();
var cors = require("cors");
require("dotenv").config();

var T = new Twit({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_SECRET_KEY,
  access_token: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
  timeout_ms: 60 * 1000,
  strictSSL: true,
});

app.use(cors());
app.get("/tweets", function (req, res) {
  var q = req.query.q;
  var count = req.query.count;
  T.get(`search/tweets`, { q, count }, function (err, data, response) {
    if (err) res.send(err, 500);
    res.send(data);
  });
});

app.listen(4000);
