// Controller here
// complete building out the controller
var Product = require('/Users/jimmylin/Desktop/HRHW/fullstack-mongo-mock/db/dbhelpers.js');

const controller = {
  get: (req, res) => {
    Product.getProductsHelper({})
      .then((results) => {
        res.status(200).json(results);
      })
      .catch((err) => {
        console.log(err);
      })
  },
  post: (req, res) => {
    Product.postProductsHelper(req.body)
      .then(() => {
        res.status(200).send('Post Successful!');
      })
      .catch((err) => {
        res.status(400).send(err);
      })
  },
  put: (req, res) => {
    Product.updateProductHelper(req.params.id, req.body)
      .then(() => {
        res.status(200).send('Update Successful!');
      })
      .catch((err) => {
        res.status(400).send(err);
      })
  },
  delete: (req, res) => Product.deleteProductHelper(req.params.id)
    .then(() => {
      res.status(200).send('Delete Successful!');
    })
    .catch((err) => {
      res.status(400).send('err');
    })
}

module.exports = controller