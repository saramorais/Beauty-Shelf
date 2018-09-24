const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const User = require('../models').User;
const Product = require('../models').Product;

module.exports = {
  list(req, res) {
    return Product
      .findAll({ 
        limit: 4
      })
      .then((products) => res.status(200).send(products))
      .catch((error) => { res.status(400).send(error); });
  },

  listLong(req, res) {
    return Product
      .findAll()
      .then((products) => res.status(200).send(products))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return Product
      .findById(req.params.id, {
        include: [{
          model: User,
          as: 'users'
        }],
      })
      .then((product) => {
        if (!product) {
          return res.status(404).send({
            message: 'Product Not Found',
          });
        }
        return res.status(200).send(product);
      })
      .catch((error) => res.status(400).send(error));
  },

  add(req, res) {
    return Product
      .create({
        name: req.body.name,
        brand: req.body.brand,
        description: req.body.description,
        picture: req.body.picture,
        website: req.body.website,
        category: req.body.category
      })
      .then((product) => res.status(201).send(product))
      .catch((error) => res.status(400).send(error));
  },

  // update(req, res) {
  //   return Product
  //     .findById(req.params.id, {
  //       include: [{
  //         model: Product,
  //         as: 'product'
  //       }],
  //     })
  //     .then(product => {
  //       if (!product) {
  //         return res.status(404).send({
  //           message: 'Product Not Found',
  //         });
  //       }
  //       return product
  //         .update({
  //           product_name: req.body.product_name || classroom.product_name,
  //         })
  //         .then(() => res.status(200).send(product))
  //         .catch((error) => res.status(400).send(error));
  //     })
  //     .catch((error) => res.status(400).send(error));
  // },

  productSearch(req, res) {
    console.log(req.params.term);
    return Product
      .findAll({
        where: {
          [Op.or]: [{category: req.params.term}, {brand: req.params.term}, {name: req.params.term}]
        }
      })
      .then((products) => {
        if (products.length === 0) {
          return Product
            .findAll()
            .then((products) => res.status(200).send(products))
            .catch((error) => { res.status(400).send(error); });
        }
        return res.status(200).send(products);
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return Product
      .findById(req.params.id)
      .then(product => {
        if (!product) {
          return res.status(400).send({
            message: 'Product Not Found',
          });
        }
        return product
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};