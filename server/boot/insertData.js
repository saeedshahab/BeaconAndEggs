const async = require('async');


module.exports = (server) => {
  async.waterfall([
    (callback) => {
      server.models.Store.create({
        location: 'Hatfield',
        type: 'Extra'
      }, (err, res) => {
        callback(err);
      });
    }, (callback) =>{
      server.models.Product.create([{
        gtin: '123',
        name: 'Bacon'
      }, {
        gtin: '1234',
        name: 'Cheese'
      }, {
        gtin: '12345',
        name: 'Eggs'
      }], (err, res) => {
        callback(err);
      })
    }, (callback) => {
      server.models.ProductLocation.create([{
        storeId: '1',
        productId: '1'
      },{
        storeId: '1',
        productId: '2'
      },{
        storeId: '1',
        productId: '3'
      }], (err, res) => {
        callback(err);
      })
    }, (callback) => {
      server.models.Price.create([{
        productLocationId: '1',
        price: '$12'
      }, {
        productLocationId: '2',
        price: '$14'
      },{
        productLocationId: '3',
        price: '$16'
      }], (err,res) => {
        callback(err);
      })
    }, (callback) => {
      server.models.Promotion.create([{
        productLocationId: '1',
        priceId: '1',
        newPrice: '$8',
        featured: true
      }, {
        productLocationId: '2',
        priceId: '2',
        newPrice: '$9',
        featured: true
      }], (err,res) => {
        callback(err);
      })
    }
  ], (err, res) => {
    console.log('err', JSON.stringify(err,1,4));
    console.log('Loading done');
  });
};
