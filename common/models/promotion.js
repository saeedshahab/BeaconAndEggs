'use strict';
const async = require('async');
const app = require('../../server/server');
const _ = require('lodash');
// const Xpress = require('express');
// var express = Xpress;



module.exports = function(Promotion) {
  Promotion.getAllPromotions = (storeId, callback) => {
    app.models.Promotion.find({
      where: {
        featured: true
      },
      include: [{
        relation: 'productLocation',
        scope: {
          where: {
            storeId: storeId
          },
          include: [{
            relation: 'store'  
          }, {
            relation: 'product'
          }
        ]
        }
      }, {
        relation: 'price',
        scope: {
          fields: ['price', 'productLocationid']
        }
      }
    ]
    }, (err, results) => {
      let response = "<html><body>";
      response += "<table border='1'>";
      // let response = [];
      if (!err) {
        async.forEach(results, (element, callback) => {
          element = JSON.parse(JSON.stringify(element));
          response += "<tr>";
          response += "<td>" + element.productLocation.store.location + "</td>";
          response += "<td>" + element.productLocation.product.name + "</td>";
          response += "<td>" + element.productLocation.product.gtin + "</td>";
          response += "<td>" + element.price.price + "</td>";
          response += "<td>" + element.newPrice + "</td>";
          response += "</tr>";
          // let obj = {
          //   store: element.productLocation.store.location,
          //   product: {
          //     name: element.productLocation.product.name,
          //     gtin: element.productLocation.product.gtin   
          //   },
          //   price: {
          //     oldPrice: element.price.price,
          //     newPrice: element.newPrice
          //   }
          // };
          // response.push(obj);
          callback();
        }, (err) => {
          response += "</table></body></html>"
          callback(err, response);
        });
      } else callback(err, response);
    
    });
  };

  Promotion.remoteMethod('getAllPromotions', {
    notes: ['Returns all promotions in a store '],
    description: 'Returns all promotions in a store ',
    http: {
      path: '/getAllPromotions',
      verb: 'get'
    },
    accepts: [
      {
        arg: 'storeId',
        type: 'string',
        http: {
          source: 'query'
        },
        description: 'Id of the store'
      }
    ],
    returns: {
      http: {
        status: 200
      },
      type: 'string',
      root: true
    }
  });
};

