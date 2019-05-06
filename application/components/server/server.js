require('./settings');

const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    requestManager = require('../request_manager/requestManager'),
    routeManager = require('../route_manager/routeManager');

app.use('/public', express.static('public'));
app.use('/favicon.ico', express.static('favicon.ico'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

requestManager.parse(app, routeManager.route);

app.listen(PORT);

console.log(`Server running on port: ${PORT}`);