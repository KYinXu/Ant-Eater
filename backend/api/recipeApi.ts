var express = require('express');
var request = require('request');
var app = express();


const API_BASE_URL: string = 'http://d1.supercook.com/dyn/results';


app.post('/send-request', (req: any, res: any) => {
  const headers = {
    'needsimage': '1',
    'app': '1',
    'Access-Control-Allow-Origin': '*',
    "Access-Control-Allow-Headers": "'Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token'",
    "Access-Control-Allow-Methods": "*",
  }
  const payload = {
      'kitchen': ['jalapeno','potato','bell', 'pepper','carrot','egg'],
      'focus': '',
      'exclude': '',
      'kw': '',
      'catname': '',
      'start': '0',
      'fave': 'false',
      'lang': 'en',
      'cv': '2'
  }


  request.post({
    url: API_BASE_URL,
    json: true,
    body: payload,
    headers: headers
  }, 
  (error: any, response: any, body: any) => {
    if (error) {
      return res.status(500).json({ error: 'Request failed' });
    }

    res.json(body);
    console.log(body);
    return res.status(200).json(res.json(body));
  });
});
