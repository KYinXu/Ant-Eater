var express = require('express');
var request = require('request');
var cors = require('cors');
//var recipeApi = require('./api/recipeApi.ts');
var app = express();


app.use(express.json())
app.use(express.urlencoded({extended: true}))
//app.use('/', recipeApi);


app.get('/', (req: any, res: any) => {
    console.log("TESTTETS");

    app.post('/send-request');
    return "Hello World";
});

app.post('/send-request', (req: any, res: any) => {
    console.log("Post");
    const API_BASE_URL: string = 'http://d1.supercook.com/dyn/results';
    const headers = {
    'needsimage': '1',
    'app': '1'
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

    let apiResponse = request.post(API_BASE_URL, {json: true, body: payload, headers: headers});
    apiResponse.json(apiResponse.body);
    console.log(apiResponse);
    return apiResponse;
});

app.listen(5500);