const async = require('async');

module.exports = (server) => {
  async.waterfall([
    (callback) => {
      server.models.Store.create([{
        location: 'London',
        type: 'Extra',
        contact: '+44 34567 19559',
        imageName: 'files/London.jpg'
      }, {
        location: 'Liverpool',
        type: 'Extra',
        contact: '+44 345 677 9002',
        imageName: 'files/Liverpool.jpeg'
      }, {
        location: 'Manchester',
        type: 'Extra',
        contact: '+44 345 671 9380',
        imageName: 'files/Manchester.jpg'
      }], (err, res) => {
        callback(err);
      });
    }, (callback) =>{
      server.models.Product.create([{
        gtin: '50123456',
        name: 'Bacon',
      }, {
        gtin: '50987890',
        name: 'Cheese',
      }, {
        gtin: '43256789',
        name: 'Eggs',
      }, {
        gtin: '43256009',
        name: 'Baked Beans',
      }, {
        gtin: '41156009',
        name: 'Tea',
      }], (err, res) => {
        callback(err);
      });
    }, (callback) => {
      server.models.ProductLocation.create([{
        storeId: '1',
        productId: '1',
      }, {
        storeId: '1',
        productId: '2',
      }, {
        storeId: '1',
        productId: '3',
      }, {
        storeId: '1',
        productId: '4',
      }, {
        storeId: '1',
        productId: '5',
      }, {
        storeId: '2',
        productId: '1',
      }, {
        storeId: '2',
        productId: '2',
      }, {
        storeId: '2',
        productId: '3',
      }, {
        storeId: '2',
        productId: '4',
      }, {
        storeId: '2',
        productId: '5',
      }, {
        storeId: '3',
        productId: '1',
      }, {
        storeId: '3',
        productId: '2',
      }, {
        storeId: '3',
        productId: '3',
      }, {
        storeId: '3',
        productId: '4',
      }, {
        storeId: '3',
        productId: '5',
      }], (err, res) => {
        callback(err);
      });
    }, (callback) => {
      server.models.Price.create([{
        productLocationId: '1',
        price: '12',
      }, {
        productLocationId: '2',
        price: '14',
      }, {
        productLocationId: '3',
        price: '16',
      }, {
        productLocationId: '4',
        price: '12',
      }, {
        productLocationId: '5',
        price: '14',
      }, {
        productLocationId: '6',
        price: '16',
      }, {
        productLocationId: '7',
        price: '12',
      }, {
        productLocationId: '8',
        price: '14',
      }, {
        productLocationId: '9',
        price: '16',
      }, {
        productLocationId: '10',
        price: '12',
      }, {
        productLocationId: '11',
        price: '14',
      }, {
        productLocationId: '12',
        price: '16',
      }, {
        productLocationId: '13',
        price: '12',
      }, {
        productLocationId: '14',
        price: '14',
      }, {
        productLocationId: '15',
        price: '16',
      }], (err, res) => {
        callback(err);
      });
    }, (callback) => {
      server.models.Promotion.create([{
        productLocationId: '1',
        priceId: '1',
        newPrice: '8',
        featured: true,
      }, {
        productLocationId: '2',
        priceId: '2',
        newPrice: '9',
        featured: true,
      }, {
        productLocationId: '8',
        priceId: '8',
        newPrice: '10',
        featured: true,
      }, {
        productLocationId: '9',
        priceId: '9',
        newPrice: '10',
        featured: true,
      }, {
        productLocationId: '12',
        priceId: '12',
        newPrice: '8',
        featured: true,
      }, {
        productLocationId: '13',
        priceId: '13',
        newPrice: '9',
        featured: true,
      }, {
        productLocationId: '4',
        priceId: '4',
        newPrice: '8',
        featured: true,
      }, {
        productLocationId: '10',
        priceId: '10',
        newPrice: '9',
        featured: true,
      }], (err, res) => {
        callback(err);
      });
    },
  ], (err, res) => {
    console.log('err', JSON.stringify(err, 1, 4));
    console.log('Loading done');
  });
};
