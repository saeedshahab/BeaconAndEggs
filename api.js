'use strict';

var http = require('http');
var fs = require('fs');
var request = require('request');
//2.
var server = http.createServer(function(req, resp) {
    //3.
    if (req.url === '/getAllPromotions') {
            request.get('http://localhost:3000/api/Promotions/getAllPromotions?storeId=1', null, (err, res, body) => {
                if (err) {
                    resp.writeHead(404);
                    resp.write('Contents you are looking are Not Found');
                } else {
                    resp.writeHead(200, { 'Content-Type': 'text/html' });
                    resp.write(body);
                }
                resp.end();
            });
    } else {
        //4.
        resp.writeHead(200, { 'Content-Type': 'text/html' });
        resp.write('<h1>Product Manaager</h1><br /><br />To create product please enter: ' + req.url);
        resp.end();
    }
});
//5.
server.listen(3001);
 
console.log('Server Started listening on 5050');
