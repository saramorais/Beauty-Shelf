const express = require('express');
const app = express();
const User = require('../models').User;
const Product = require('../models').Product;

module.exports = {

  login(req, res) {
    const loginEmail = req.body.email;
    const loginPassword = req.body.password;
    return User
      .findOne({
        where: { email: loginEmail }
      })
      .then(function(user) {
        if (user) {
          if (loginPassword === user.passworddigest) {
            req.session.currentUser = user.id;
            res.status(200);
            res.send({
              id: user.id,
              name: user.name,
              location: user.location,
              website: user.website,
              about: user.about,
              picture: user.picture,
              skintype: user.skintype,
              hairtype: user.hairtype,
              hairstatus: user.hairstatus
            });
          } else {
            res.status(400).send({err: 400, msg: 'Wrong Password'});
          }
        } else {
          console.log('user not found')
          res.status(400);
          res.send({err: 400, msg: 'User does not exist. Please signup for an account'});
        }
      });
  },

  logout(req, res) {
    delete req.session.currentUser;
    res.send({msg: 'Logged out'});
  },

  list(req, res) {
    return User
      .findAll({
        include: [{
          model: Product,
          as: 'products'
        }]
      })
      .then((users) => res.status(200).send(users))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return User
      .findById(req.params.id, {
        include: [{
          model: Product,
          as: 'products'
        }],
      })
      .then((user) => {
        if (!user) {
          return res.status(404).send({
            message: 'User Not Found',
          });
        }
        return res.status(200).send({
          id: user.id,
          name: user.name,
          location: user.location,
          website: user.website,
          about: user.about,
          picture: user.picture,
          skintype: user.skintype,
          hairtype: user.hairtype,
          hairstatus: user.hairstatus,
          products: user.products
        });
      })
      .catch((error) => res.status(400).send(error));
  },

  add(req, res) {
    return User
      .create({
        email: req.body.email,
        passworddigest: req.body.password
      })
      .then((user) => res.status(201).send(user))
      .catch((error) => res.status(400).send(error));
  },

  addProduct(req, res) {
    return User
      .findById(req.body.user_id, {
        include: [{
          model: Product,
          as: 'products'
        }],
      })
      .then((user) => {
        if (!user) {
          return res.status(404).send({
            message: 'User Not Found',
          });
        }
      Product
        .findById(req.body.product_id)
        .then((product) => {
          if (!product) {
            return res.status(404).send({
              message: 'Product Not Found',
            });
          }
          user.addProduct(product);
          return res.status(200).send(user);
        })
      })
      .catch((error) => res.status(400).send(error));
  },


  update(req, res) {
    console.log(req.body, req.params.id);
    return User
      .findById(req.params.id)
      .then(user => {
        if (!user) {
          return res.status(404).send({
            message: 'User Not Found',
          });
        }
        return user
          .update({
            name: req.body.name,
            about: req.body.about,
            picture: req.body.picture,
            website: req.body.website,
            location: req.body.location,
            hairtype: req.body.hairtype,
            hairstatus: req.body.hairstatus,
            skintype: req.body.skintype
          })
          .then((user) => res.status(200).send({
            id: user.id,
            name: user.name,
            location: user.location,
            website: user.website,
            about: user.about,
            picture: user.picture,
            skintype: user.skintype,
            hairtype: user.hairtype,
            hairstatus: user.hairstatus
          }))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  usersSearch(req, res) {
    return User
      .findAll({
        where: { skintype: req.params.term },
        include: [{
          model: Product,
          as: 'products'
        }]
      })
      .then((users) => {
        if (users.length === 0) {
          return User
            .findAll({
              include: [{
                model: Product,
                as: 'products'
              }]
            })
            .then((users) => res.status(200).send(users))
            .catch((error) => { res.status(400).send(error); });
        }
        return res.status(200).send(users);
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return User
      .findById(req.params.id)
      .then(user => {
        if (!user) {
          return res.status(400).send({
            message: 'User Not Found',
          });
        }
        return user
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};