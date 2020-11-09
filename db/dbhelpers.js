var Product = require('./');
const mongoose = require('mongoose');
// complete the dbhelpers

var helpers = {
  getProductsHelper: () => Product.find({}),
  postProductsHelper: (item) => Product.create({item: item.item, min_cost: item.min_cost, curr_bid: item.curr_bid, ends_in: item.ends_in, image: item.image}),
  updateProductHelper: (_id, item) => Product.findOneAndUpdate({_id}, {min_cost: item.min_cost, curr_bid: item.curr_bid, ends_in: item.ends_in, image: item.image}),
  deleteProductHelper: (_id) => Product.deleteOne({_id})
};

module.exports = helpers