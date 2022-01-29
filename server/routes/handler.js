

const express = require('express');
const { json } = require('express/lib/response');
const router = express.Router();

router.get('/api/tweets', (req, res) => {
  const str = [
    {
      "id": "0",
      "name": "Doctor Strange",
      "msg": "This is my first tweet!",
      "username": "drStrange"
    },
    {
      "id": "1",
      "name": "Steve Martin",
      "msg": "React JS is so simple!",
      "username": "SteveM"
    },
    {
      "id": "2",
      "name": "John Kennedy",
      "msg": "Node is even simpler!",
      "username": "johnk"
    }
  ];
  res.status(200).end(JSON.stringify(str));
});

router.post('/api/addTweet', (req, res) => {
  res.end('NA');
});

module.exports = router;